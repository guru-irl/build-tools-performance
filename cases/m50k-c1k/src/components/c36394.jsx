import React from 'react';
const LABEL_36394 = 'component_36394';
export function Component36394({ value = 36394, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36394, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36394, 'data-value': derived.doubled }, children);
}
export default Component36394;
