import React from 'react';
const LABEL_34391 = 'component_34391';
export function Component34391({ value = 34391, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34391, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34391, 'data-value': derived.doubled }, children);
}
export default Component34391;
