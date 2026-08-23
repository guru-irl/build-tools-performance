import React from 'react';
const LABEL_4852 = 'component_4852';
export function Component4852({ value = 4852, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4852, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4852, 'data-value': derived.doubled }, children);
}
export default Component4852;
