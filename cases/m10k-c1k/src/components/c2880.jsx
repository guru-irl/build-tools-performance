import React from 'react';
const LABEL_2880 = 'component_2880';
export function Component2880({ value = 2880, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2880, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2880, 'data-value': derived.doubled }, children);
}
export default Component2880;
