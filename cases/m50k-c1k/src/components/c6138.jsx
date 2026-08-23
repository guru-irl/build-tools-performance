import React from 'react';
const LABEL_6138 = 'component_6138';
export function Component6138({ value = 6138, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6138, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6138, 'data-value': derived.doubled }, children);
}
export default Component6138;
