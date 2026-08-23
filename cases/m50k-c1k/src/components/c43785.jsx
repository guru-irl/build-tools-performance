import React from 'react';
const LABEL_43785 = 'component_43785';
export function Component43785({ value = 43785, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43785, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43785, 'data-value': derived.doubled }, children);
}
export default Component43785;
