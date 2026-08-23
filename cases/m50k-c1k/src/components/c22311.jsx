import React from 'react';
const LABEL_22311 = 'component_22311';
export function Component22311({ value = 22311, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22311, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22311, 'data-value': derived.doubled }, children);
}
export default Component22311;
