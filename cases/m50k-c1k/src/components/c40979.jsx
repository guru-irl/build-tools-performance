import React from 'react';
const LABEL_40979 = 'component_40979';
export function Component40979({ value = 40979, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40979, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40979, 'data-value': derived.doubled }, children);
}
export default Component40979;
