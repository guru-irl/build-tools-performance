import React from 'react';
const LABEL_13022 = 'component_13022';
export function Component13022({ value = 13022, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13022, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13022, 'data-value': derived.doubled }, children);
}
export default Component13022;
