import React from 'react';
const LABEL_13132 = 'component_13132';
export function Component13132({ value = 13132, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13132, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13132, 'data-value': derived.doubled }, children);
}
export default Component13132;
