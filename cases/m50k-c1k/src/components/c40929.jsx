import React from 'react';
const LABEL_40929 = 'component_40929';
export function Component40929({ value = 40929, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40929, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40929, 'data-value': derived.doubled }, children);
}
export default Component40929;
