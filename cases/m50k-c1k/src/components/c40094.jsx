import React from 'react';
const LABEL_40094 = 'component_40094';
export function Component40094({ value = 40094, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40094, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40094, 'data-value': derived.doubled }, children);
}
export default Component40094;
