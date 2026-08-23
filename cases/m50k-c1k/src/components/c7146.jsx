import React from 'react';
const LABEL_7146 = 'component_7146';
export function Component7146({ value = 7146, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7146, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7146, 'data-value': derived.doubled }, children);
}
export default Component7146;
