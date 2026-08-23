import React from 'react';
const LABEL_34785 = 'component_34785';
export function Component34785({ value = 34785, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34785, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34785, 'data-value': derived.doubled }, children);
}
export default Component34785;
