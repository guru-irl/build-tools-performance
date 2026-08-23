import React from 'react';
const LABEL_13417 = 'component_13417';
export function Component13417({ value = 13417, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13417, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13417, 'data-value': derived.doubled }, children);
}
export default Component13417;
