import React from 'react';
const LABEL_12436 = 'component_12436';
export function Component12436({ value = 12436, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12436, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12436, 'data-value': derived.doubled }, children);
}
export default Component12436;
