import React from 'react';
const LABEL_2524 = 'component_2524';
export function Component2524({ value = 2524, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2524, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2524, 'data-value': derived.doubled }, children);
}
export default Component2524;
