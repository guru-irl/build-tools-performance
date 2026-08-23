import React from 'react';
const LABEL_7042 = 'component_7042';
export function Component7042({ value = 7042, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7042, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7042, 'data-value': derived.doubled }, children);
}
export default Component7042;
