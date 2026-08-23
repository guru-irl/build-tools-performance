import React from 'react';
const LABEL_11017 = 'component_11017';
export function Component11017({ value = 11017, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11017, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11017, 'data-value': derived.doubled }, children);
}
export default Component11017;
