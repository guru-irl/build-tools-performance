import React from 'react';
const LABEL_895 = 'component_895';
export function Component895({ value = 895, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_895, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_895, 'data-value': derived.doubled }, children);
}
export default Component895;
