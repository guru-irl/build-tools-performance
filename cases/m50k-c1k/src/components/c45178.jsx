import React from 'react';
const LABEL_45178 = 'component_45178';
export function Component45178({ value = 45178, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45178, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45178, 'data-value': derived.doubled }, children);
}
export default Component45178;
