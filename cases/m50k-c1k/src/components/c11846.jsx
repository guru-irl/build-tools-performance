import React from 'react';
const LABEL_11846 = 'component_11846';
export function Component11846({ value = 11846, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11846, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11846, 'data-value': derived.doubled }, children);
}
export default Component11846;
