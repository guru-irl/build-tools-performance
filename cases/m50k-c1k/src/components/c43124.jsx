import React from 'react';
const LABEL_43124 = 'component_43124';
export function Component43124({ value = 43124, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43124, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43124, 'data-value': derived.doubled }, children);
}
export default Component43124;
