import React from 'react';
const LABEL_43854 = 'component_43854';
export function Component43854({ value = 43854, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43854, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43854, 'data-value': derived.doubled }, children);
}
export default Component43854;
