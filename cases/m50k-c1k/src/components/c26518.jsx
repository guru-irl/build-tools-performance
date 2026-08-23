import React from 'react';
const LABEL_26518 = 'component_26518';
export function Component26518({ value = 26518, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26518, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26518, 'data-value': derived.doubled }, children);
}
export default Component26518;
