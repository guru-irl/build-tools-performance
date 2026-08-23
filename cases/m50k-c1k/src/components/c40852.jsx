import React from 'react';
const LABEL_40852 = 'component_40852';
export function Component40852({ value = 40852, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40852, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40852, 'data-value': derived.doubled }, children);
}
export default Component40852;
