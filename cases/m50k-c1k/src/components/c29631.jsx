import React from 'react';
const LABEL_29631 = 'component_29631';
export function Component29631({ value = 29631, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29631, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29631, 'data-value': derived.doubled }, children);
}
export default Component29631;
