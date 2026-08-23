import React from 'react';
const LABEL_13042 = 'component_13042';
export function Component13042({ value = 13042, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13042, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13042, 'data-value': derived.doubled }, children);
}
export default Component13042;
