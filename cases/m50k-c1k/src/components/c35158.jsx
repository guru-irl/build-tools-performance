import React from 'react';
const LABEL_35158 = 'component_35158';
export function Component35158({ value = 35158, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35158, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35158, 'data-value': derived.doubled }, children);
}
export default Component35158;
