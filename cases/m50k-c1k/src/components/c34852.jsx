import React from 'react';
const LABEL_34852 = 'component_34852';
export function Component34852({ value = 34852, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34852, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34852, 'data-value': derived.doubled }, children);
}
export default Component34852;
