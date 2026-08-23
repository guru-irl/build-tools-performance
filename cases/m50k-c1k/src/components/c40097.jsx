import React from 'react';
const LABEL_40097 = 'component_40097';
export function Component40097({ value = 40097, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40097, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40097, 'data-value': derived.doubled }, children);
}
export default Component40097;
