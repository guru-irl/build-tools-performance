import React from 'react';
const LABEL_4172 = 'component_4172';
export function Component4172({ value = 4172, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4172, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4172, 'data-value': derived.doubled }, children);
}
export default Component4172;
