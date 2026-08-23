import React from 'react';
const LABEL_44408 = 'component_44408';
export function Component44408({ value = 44408, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44408, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44408, 'data-value': derived.doubled }, children);
}
export default Component44408;
