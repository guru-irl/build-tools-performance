import React from 'react';
const LABEL_3931 = 'component_3931';
export function Component3931({ value = 3931, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3931, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3931, 'data-value': derived.doubled }, children);
}
export default Component3931;
