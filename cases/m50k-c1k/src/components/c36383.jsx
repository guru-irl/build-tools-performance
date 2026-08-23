import React from 'react';
const LABEL_36383 = 'component_36383';
export function Component36383({ value = 36383, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36383, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36383, 'data-value': derived.doubled }, children);
}
export default Component36383;
