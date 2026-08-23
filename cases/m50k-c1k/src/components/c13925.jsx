import React from 'react';
const LABEL_13925 = 'component_13925';
export function Component13925({ value = 13925, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13925, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13925, 'data-value': derived.doubled }, children);
}
export default Component13925;
