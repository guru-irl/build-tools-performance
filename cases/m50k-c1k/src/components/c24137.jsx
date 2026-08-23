import React from 'react';
const LABEL_24137 = 'component_24137';
export function Component24137({ value = 24137, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24137, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24137, 'data-value': derived.doubled }, children);
}
export default Component24137;
