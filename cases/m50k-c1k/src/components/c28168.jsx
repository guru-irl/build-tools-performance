import React from 'react';
const LABEL_28168 = 'component_28168';
export function Component28168({ value = 28168, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28168, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28168, 'data-value': derived.doubled }, children);
}
export default Component28168;
