import React from 'react';
const LABEL_31668 = 'component_31668';
export function Component31668({ value = 31668, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31668, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31668, 'data-value': derived.doubled }, children);
}
export default Component31668;
