import React from 'react';
const LABEL_38788 = 'component_38788';
export function Component38788({ value = 38788, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38788, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38788, 'data-value': derived.doubled }, children);
}
export default Component38788;
