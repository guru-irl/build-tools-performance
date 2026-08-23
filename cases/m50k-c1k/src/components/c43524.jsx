import React from 'react';
const LABEL_43524 = 'component_43524';
export function Component43524({ value = 43524, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43524, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43524, 'data-value': derived.doubled }, children);
}
export default Component43524;
