import React from 'react';
const LABEL_23022 = 'component_23022';
export function Component23022({ value = 23022, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23022, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23022, 'data-value': derived.doubled }, children);
}
export default Component23022;
