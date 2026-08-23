import React from 'react';
const LABEL_4068 = 'component_4068';
export function Component4068({ value = 4068, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4068, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4068, 'data-value': derived.doubled }, children);
}
export default Component4068;
