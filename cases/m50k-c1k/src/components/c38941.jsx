import React from 'react';
const LABEL_38941 = 'component_38941';
export function Component38941({ value = 38941, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38941, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38941, 'data-value': derived.doubled }, children);
}
export default Component38941;
