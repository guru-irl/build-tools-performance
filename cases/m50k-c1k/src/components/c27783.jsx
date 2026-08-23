import React from 'react';
const LABEL_27783 = 'component_27783';
export function Component27783({ value = 27783, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27783, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27783, 'data-value': derived.doubled }, children);
}
export default Component27783;
