import React from 'react';
const LABEL_20436 = 'component_20436';
export function Component20436({ value = 20436, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20436, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20436, 'data-value': derived.doubled }, children);
}
export default Component20436;
