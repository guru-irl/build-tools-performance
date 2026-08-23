import React from 'react';
const LABEL_29609 = 'component_29609';
export function Component29609({ value = 29609, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29609, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29609, 'data-value': derived.doubled }, children);
}
export default Component29609;
