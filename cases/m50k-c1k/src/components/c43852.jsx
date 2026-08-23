import React from 'react';
const LABEL_43852 = 'component_43852';
export function Component43852({ value = 43852, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43852, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43852, 'data-value': derived.doubled }, children);
}
export default Component43852;
