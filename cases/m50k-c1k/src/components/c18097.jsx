import React from 'react';
const LABEL_18097 = 'component_18097';
export function Component18097({ value = 18097, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18097, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18097, 'data-value': derived.doubled }, children);
}
export default Component18097;
