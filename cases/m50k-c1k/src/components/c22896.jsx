import React from 'react';
const LABEL_22896 = 'component_22896';
export function Component22896({ value = 22896, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22896, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22896, 'data-value': derived.doubled }, children);
}
export default Component22896;
