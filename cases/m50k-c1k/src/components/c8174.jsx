import React from 'react';
const LABEL_8174 = 'component_8174';
export function Component8174({ value = 8174, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8174, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8174, 'data-value': derived.doubled }, children);
}
export default Component8174;
