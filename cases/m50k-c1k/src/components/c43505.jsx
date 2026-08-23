import React from 'react';
const LABEL_43505 = 'component_43505';
export function Component43505({ value = 43505, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43505, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43505, 'data-value': derived.doubled }, children);
}
export default Component43505;
