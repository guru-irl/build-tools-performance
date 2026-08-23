import React from 'react';
const LABEL_40873 = 'component_40873';
export function Component40873({ value = 40873, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40873, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40873, 'data-value': derived.doubled }, children);
}
export default Component40873;
