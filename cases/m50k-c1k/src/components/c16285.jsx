import React from 'react';
const LABEL_16285 = 'component_16285';
export function Component16285({ value = 16285, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16285, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16285, 'data-value': derived.doubled }, children);
}
export default Component16285;
