import React from 'react';
const LABEL_43989 = 'component_43989';
export function Component43989({ value = 43989, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43989, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43989, 'data-value': derived.doubled }, children);
}
export default Component43989;
