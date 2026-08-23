import React from 'react';
const LABEL_27820 = 'component_27820';
export function Component27820({ value = 27820, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27820, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27820, 'data-value': derived.doubled }, children);
}
export default Component27820;
