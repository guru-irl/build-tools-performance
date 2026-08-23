import React from 'react';
const LABEL_27406 = 'component_27406';
export function Component27406({ value = 27406, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27406, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27406, 'data-value': derived.doubled }, children);
}
export default Component27406;
