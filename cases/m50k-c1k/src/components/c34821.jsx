import React from 'react';
const LABEL_34821 = 'component_34821';
export function Component34821({ value = 34821, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34821, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34821, 'data-value': derived.doubled }, children);
}
export default Component34821;
