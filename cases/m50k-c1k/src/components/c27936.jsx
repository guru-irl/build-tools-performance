import React from 'react';
const LABEL_27936 = 'component_27936';
export function Component27936({ value = 27936, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27936, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27936, 'data-value': derived.doubled }, children);
}
export default Component27936;
