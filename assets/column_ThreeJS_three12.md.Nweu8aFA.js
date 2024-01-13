import{_ as s,f as i,o as a,aM as h}from"./chunks/framework.c_X9LrYI.js";const t="/docs/assets/10s.yJ0yGC2i.gif",n="/docs/assets/tutieshi_480x446_7s.PC_Tca9-.gif",F=JSON.parse('{"title":"Three.js——十二、MeshPhysicalMaterial清漆层、粗糙度、物理材质透光率以及折射率（结尾附代码）","description":"","frontmatter":{},"headers":[],"relativePath":"column/ThreeJS/three12.md","filePath":"column/ThreeJS/three12.md","lastUpdated":1704946836000}'),l={name:"column/ThreeJS/three12.md"},e=h(`<h1 id="three-js——十二、meshphysicalmaterial清漆层、粗糙度、物理材质透光率以及折射率-结尾附代码" tabindex="-1">Three.js——十二、MeshPhysicalMaterial清漆层、粗糙度、物理材质透光率以及折射率（结尾附代码） <a class="header-anchor" href="#three-js——十二、meshphysicalmaterial清漆层、粗糙度、物理材质透光率以及折射率-结尾附代码" aria-label="Permalink to &quot;Three.js——十二、MeshPhysicalMaterial清漆层、粗糙度、物理材质透光率以及折射率（结尾附代码）&quot;">​</a></h1><h2 id="环境贴图作用测试" tabindex="-1">环境贴图作用测试 <a class="header-anchor" href="#环境贴图作用测试" aria-label="Permalink to &quot;环境贴图作用测试&quot;">​</a></h2><h4 id="meshphysicalmaterial清漆层" tabindex="-1"><code>MeshPhysicalMaterial</code>清漆层 <a class="header-anchor" href="#meshphysicalmaterial清漆层" aria-label="Permalink to &quot;\`MeshPhysicalMaterial\`清漆层&quot;">​</a></h4><p><code>MeshPhysicalMaterial</code>和<code>MeshStandarMaterial</code>都是拥有金属度<code>metalness</code>、粗糙度<code>roughness</code>属性的PBR材质，<code>MeshPhysicalMaterial</code>是<code>MeshStandarMaterial</code>的子集，除了继承了他的这些属性以外，还新增了清漆、透光率、反射率、光泽、折射率等等</p><h4 id="清漆层属性-clearcoat" tabindex="-1">清漆层属性<code>.clearcoat</code> <a class="header-anchor" href="#清漆层属性-clearcoat" aria-label="Permalink to &quot;清漆层属性\`.clearcoat\`&quot;">​</a></h4><p>清漆层属性<code>.clearcoat</code>可以用来模拟物体表面刷了一层透明的模<code>.clearcoat</code>的范围0到1，默认0。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> material</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> THREE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">MeshPhysicalMaterial</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">( {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	clearcoat: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//物体表面清漆层或者说透明涂层的厚度</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} );</span></span></code></pre></div><h4 id="关于meshphysicalmaterial材质" tabindex="-1">关于MeshPhysicalMaterial材质 <a class="header-anchor" href="#关于meshphysicalmaterial材质" aria-label="Permalink to &quot;关于MeshPhysicalMaterial材质&quot;">​</a></h4><p><code>MeshPhysicalMaterial</code>是Three.js中的一种材质类型，它是基于物理的渲染（PBR）材质，可以模拟真实世界中的光照和材质反射。它支持金属和非金属材质，可以设置粗糙度、金属度、环境光遮蔽、法线贴图、位移贴图等属性，以实现更真实的渲染效果。<code>MeshPhysicalMaterial</code>还支持高光反射和透明度，可以用于创建逼真的玻璃、水、金属等材质。在使用<code>MeshPhysicalMaterial</code>时，需要注意其计算量较大，可能会影响性能，因此需要根据实际情况进行优化。</p><h4 id="清漆层粗糙度-clearcoatroughness" tabindex="-1">清漆层粗糙度<code>.clearcoatRoughness</code> <a class="header-anchor" href="#清漆层粗糙度-clearcoatroughness" aria-label="Permalink to &quot;清漆层粗糙度\`.clearcoatRoughness\`&quot;">​</a></h4><p>是指表面透明图层的粗糙程度范围是0-1。</p><h4 id="使用场景" tabindex="-1">使用场景 <a class="header-anchor" href="#使用场景" aria-label="Permalink to &quot;使用场景&quot;">​</a></h4><p>这种效果可以用来做车子的模型，比如车窗，外壳，玻璃等。 车外壳油漆效果，你可以通过PBR材质的清漆层属性<code>.clearcoat</code>和清漆层粗糙度.<code>clearcoatRoughness</code>属性模拟。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> mesh</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> gltf.scene.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getObjectByName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;外壳&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">mesh.material </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> THREE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">MeshPhysicalMaterial</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">( {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	clearcoat: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//物体表面清漆层或者说透明涂层的厚度</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	clearcoatRoughness: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//透明涂层表面的粗糙度</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} );</span></span></code></pre></div><p>实际情况可以根据模型进行调整。调整可以通过GUI进行调试，实际调试效果可以在上一章中查看。</p><h2 id="物理材质透光率" tabindex="-1">物理材质透光率 <a class="header-anchor" href="#物理材质透光率" aria-label="Permalink to &quot;物理材质透光率&quot;">​</a></h2><p>为了更好的模拟玻璃、半透明塑料一类的视觉效果,可以使用此属性来代替普通透明属性<code>.opacity</code> 使用<code>.transmission</code>属性设置Mesh透明度,即便完全透射的情况下仍可保持高反射率。 使用方式：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> geometry</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> THREE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">TorusKnotGeometry</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">16</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> material</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> THREE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">MeshPhysicalMaterial</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      color: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0x30cff8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      transmission: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    });</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> torusKnot</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> THREE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Mesh</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(geometry, material);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    scene.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">add</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(torusKnot);</span></span></code></pre></div><p>效果： <img src="`+t+`" alt=""></p><h2 id="折射率-ior" tabindex="-1">折射率<code>.ior</code> <a class="header-anchor" href="#折射率-ior" aria-label="Permalink to &quot;折射率\`.ior\`&quot;">​</a></h2><p>非金属材料的折射率从1.0到2.333。默认值为1.5。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> geometry</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> THREE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">TorusKnotGeometry</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">16</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> material</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> THREE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">MeshPhysicalMaterial</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      color: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0x30cff8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      transmission: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">       ior:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    });</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> torusKnot</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> THREE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Mesh</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(geometry, material);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    scene.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">add</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(torusKnot);</span></span></code></pre></div><p><img src="`+n+`" alt=""></p><h2 id="解析gltf材质" tabindex="-1">解析gltf材质 <a class="header-anchor" href="#解析gltf材质" aria-label="Permalink to &quot;解析gltf材质&quot;">​</a></h2><p>一般默认使用标准网格材质<code>MeshStandardMaterial</code>，如果gltf有的材质具有<code>.clearcoat</code>、<code>.transmission</code>等属性，标准网格材质<code>MeshStandardMaterial</code>无法表达的时候，会用物理网格材质<code>MeshPhysicalMaterial</code>来解析gltf材质。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">gltf.scene.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">traverse</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">obj</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (obj.isMesh) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;obj.material&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,obj.material);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;外壳&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,mesh1.material);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;玻璃&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,mesh2.material);</span></span></code></pre></div>`,26),k=[e];function p(r,d,E,c,o,g){return a(),i("div",null,k)}const C=s(l,[["render",p]]);export{F as __pageData,C as default};
