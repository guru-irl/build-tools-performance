import React from 'react';
const LABEL_7262 = 'component_7262';
export function Component7262({ value = 7262, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7262, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7262, 'data-value': derived.doubled }, children);
}
export default Component7262;
