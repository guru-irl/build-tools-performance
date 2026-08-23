import React from 'react';
const LABEL_18888 = 'component_18888';
export function Component18888({ value = 18888, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18888, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18888, 'data-value': derived.doubled }, children);
}
export default Component18888;
