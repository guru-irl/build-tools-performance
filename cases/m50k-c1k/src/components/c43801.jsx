import React from 'react';
const LABEL_43801 = 'component_43801';
export function Component43801({ value = 43801, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43801, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43801, 'data-value': derived.doubled }, children);
}
export default Component43801;
