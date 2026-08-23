import React from 'react';
const LABEL_14254 = 'component_14254';
export function Component14254({ value = 14254, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14254, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14254, 'data-value': derived.doubled }, children);
}
export default Component14254;
