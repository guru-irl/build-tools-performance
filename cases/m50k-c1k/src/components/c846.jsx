import React from 'react';
const LABEL_846 = 'component_846';
export function Component846({ value = 846, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_846, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_846, 'data-value': derived.doubled }, children);
}
export default Component846;
