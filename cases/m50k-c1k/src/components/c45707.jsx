import React from 'react';
const LABEL_45707 = 'component_45707';
export function Component45707({ value = 45707, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45707, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45707, 'data-value': derived.doubled }, children);
}
export default Component45707;
