import React from 'react';
const LABEL_13725 = 'component_13725';
export function Component13725({ value = 13725, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13725, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13725, 'data-value': derived.doubled }, children);
}
export default Component13725;
