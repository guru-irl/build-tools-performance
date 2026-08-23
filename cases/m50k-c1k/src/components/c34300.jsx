import React from 'react';
const LABEL_34300 = 'component_34300';
export function Component34300({ value = 34300, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34300, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34300, 'data-value': derived.doubled }, children);
}
export default Component34300;
