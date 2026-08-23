import React from 'react';
const LABEL_4027 = 'component_4027';
export function Component4027({ value = 4027, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4027, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4027, 'data-value': derived.doubled }, children);
}
export default Component4027;
