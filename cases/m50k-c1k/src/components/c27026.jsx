import React from 'react';
const LABEL_27026 = 'component_27026';
export function Component27026({ value = 27026, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27026, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27026, 'data-value': derived.doubled }, children);
}
export default Component27026;
