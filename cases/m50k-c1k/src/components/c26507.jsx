import React from 'react';
const LABEL_26507 = 'component_26507';
export function Component26507({ value = 26507, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26507, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26507, 'data-value': derived.doubled }, children);
}
export default Component26507;
