import React from 'react';
const LABEL_43747 = 'component_43747';
export function Component43747({ value = 43747, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43747, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43747, 'data-value': derived.doubled }, children);
}
export default Component43747;
