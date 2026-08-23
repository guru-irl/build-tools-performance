import React from 'react';
const LABEL_16138 = 'component_16138';
export function Component16138({ value = 16138, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16138, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16138, 'data-value': derived.doubled }, children);
}
export default Component16138;
