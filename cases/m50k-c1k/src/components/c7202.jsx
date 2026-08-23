import React from 'react';
const LABEL_7202 = 'component_7202';
export function Component7202({ value = 7202, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7202, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7202, 'data-value': derived.doubled }, children);
}
export default Component7202;
