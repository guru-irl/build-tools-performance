import React from 'react';
const LABEL_34933 = 'component_34933';
export function Component34933({ value = 34933, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34933, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34933, 'data-value': derived.doubled }, children);
}
export default Component34933;
