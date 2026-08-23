import React from 'react';
const LABEL_43015 = 'component_43015';
export function Component43015({ value = 43015, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43015, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43015, 'data-value': derived.doubled }, children);
}
export default Component43015;
