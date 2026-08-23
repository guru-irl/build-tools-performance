import React from 'react';
const LABEL_4014 = 'component_4014';
export function Component4014({ value = 4014, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4014, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4014, 'data-value': derived.doubled }, children);
}
export default Component4014;
