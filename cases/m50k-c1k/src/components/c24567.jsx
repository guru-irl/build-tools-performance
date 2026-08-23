import React from 'react';
const LABEL_24567 = 'component_24567';
export function Component24567({ value = 24567, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24567, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24567, 'data-value': derived.doubled }, children);
}
export default Component24567;
