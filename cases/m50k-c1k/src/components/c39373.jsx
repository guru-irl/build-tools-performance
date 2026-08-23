import React from 'react';
const LABEL_39373 = 'component_39373';
export function Component39373({ value = 39373, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39373, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39373, 'data-value': derived.doubled }, children);
}
export default Component39373;
