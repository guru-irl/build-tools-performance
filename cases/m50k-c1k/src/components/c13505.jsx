import React from 'react';
const LABEL_13505 = 'component_13505';
export function Component13505({ value = 13505, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13505, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13505, 'data-value': derived.doubled }, children);
}
export default Component13505;
