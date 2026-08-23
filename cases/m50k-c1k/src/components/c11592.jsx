import React from 'react';
const LABEL_11592 = 'component_11592';
export function Component11592({ value = 11592, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11592, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11592, 'data-value': derived.doubled }, children);
}
export default Component11592;
