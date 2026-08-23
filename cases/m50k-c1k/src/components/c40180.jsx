import React from 'react';
const LABEL_40180 = 'component_40180';
export function Component40180({ value = 40180, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40180, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40180, 'data-value': derived.doubled }, children);
}
export default Component40180;
