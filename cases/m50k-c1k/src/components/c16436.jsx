import React from 'react';
const LABEL_16436 = 'component_16436';
export function Component16436({ value = 16436, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16436, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16436, 'data-value': derived.doubled }, children);
}
export default Component16436;
