import React from 'react';
const LABEL_38250 = 'component_38250';
export function Component38250({ value = 38250, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38250, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38250, 'data-value': derived.doubled }, children);
}
export default Component38250;
