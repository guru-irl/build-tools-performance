import React from 'react';
const LABEL_26782 = 'component_26782';
export function Component26782({ value = 26782, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26782, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26782, 'data-value': derived.doubled }, children);
}
export default Component26782;
