import React from 'react';
const LABEL_43332 = 'component_43332';
export function Component43332({ value = 43332, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43332, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43332, 'data-value': derived.doubled }, children);
}
export default Component43332;
