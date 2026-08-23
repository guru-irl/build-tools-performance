import React from 'react';
const LABEL_34902 = 'component_34902';
export function Component34902({ value = 34902, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34902, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34902, 'data-value': derived.doubled }, children);
}
export default Component34902;
