import React from 'react';
const LABEL_11042 = 'component_11042';
export function Component11042({ value = 11042, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11042, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11042, 'data-value': derived.doubled }, children);
}
export default Component11042;
