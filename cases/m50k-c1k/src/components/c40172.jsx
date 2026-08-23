import React from 'react';
const LABEL_40172 = 'component_40172';
export function Component40172({ value = 40172, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40172, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40172, 'data-value': derived.doubled }, children);
}
export default Component40172;
