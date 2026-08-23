import React from 'react';
const LABEL_29846 = 'component_29846';
export function Component29846({ value = 29846, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29846, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29846, 'data-value': derived.doubled }, children);
}
export default Component29846;
