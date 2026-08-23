import React from 'react';
const LABEL_18383 = 'component_18383';
export function Component18383({ value = 18383, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18383, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18383, 'data-value': derived.doubled }, children);
}
export default Component18383;
