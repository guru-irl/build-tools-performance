import React from 'react';
const LABEL_45852 = 'component_45852';
export function Component45852({ value = 45852, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45852, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45852, 'data-value': derived.doubled }, children);
}
export default Component45852;
