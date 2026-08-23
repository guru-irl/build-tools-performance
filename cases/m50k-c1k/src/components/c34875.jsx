import React from 'react';
const LABEL_34875 = 'component_34875';
export function Component34875({ value = 34875, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34875, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34875, 'data-value': derived.doubled }, children);
}
export default Component34875;
