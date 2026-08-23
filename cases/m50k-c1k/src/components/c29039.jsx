import React from 'react';
const LABEL_29039 = 'component_29039';
export function Component29039({ value = 29039, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29039, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29039, 'data-value': derived.doubled }, children);
}
export default Component29039;
