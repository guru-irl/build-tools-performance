import React from 'react';
const LABEL_38077 = 'component_38077';
export function Component38077({ value = 38077, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38077, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38077, 'data-value': derived.doubled }, children);
}
export default Component38077;
