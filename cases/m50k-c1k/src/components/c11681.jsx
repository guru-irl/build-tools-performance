import React from 'react';
const LABEL_11681 = 'component_11681';
export function Component11681({ value = 11681, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11681, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11681, 'data-value': derived.doubled }, children);
}
export default Component11681;
