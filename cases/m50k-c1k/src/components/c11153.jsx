import React from 'react';
const LABEL_11153 = 'component_11153';
export function Component11153({ value = 11153, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11153, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11153, 'data-value': derived.doubled }, children);
}
export default Component11153;
