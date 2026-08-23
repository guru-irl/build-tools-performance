import React from 'react';
const LABEL_31846 = 'component_31846';
export function Component31846({ value = 31846, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31846, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31846, 'data-value': derived.doubled }, children);
}
export default Component31846;
