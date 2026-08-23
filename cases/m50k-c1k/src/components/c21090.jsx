import React from 'react';
const LABEL_21090 = 'component_21090';
export function Component21090({ value = 21090, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21090, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21090, 'data-value': derived.doubled }, children);
}
export default Component21090;
