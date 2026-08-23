import React from 'react';
const LABEL_21301 = 'component_21301';
export function Component21301({ value = 21301, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21301, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21301, 'data-value': derived.doubled }, children);
}
export default Component21301;
