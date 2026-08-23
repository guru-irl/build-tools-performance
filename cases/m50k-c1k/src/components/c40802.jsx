import React from 'react';
const LABEL_40802 = 'component_40802';
export function Component40802({ value = 40802, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40802, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40802, 'data-value': derived.doubled }, children);
}
export default Component40802;
