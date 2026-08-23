import React from 'react';
const LABEL_38014 = 'component_38014';
export function Component38014({ value = 38014, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38014, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38014, 'data-value': derived.doubled }, children);
}
export default Component38014;
