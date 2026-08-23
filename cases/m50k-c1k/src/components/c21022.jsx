import React from 'react';
const LABEL_21022 = 'component_21022';
export function Component21022({ value = 21022, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21022, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21022, 'data-value': derived.doubled }, children);
}
export default Component21022;
