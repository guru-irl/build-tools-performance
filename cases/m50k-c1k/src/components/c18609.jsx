import React from 'react';
const LABEL_18609 = 'component_18609';
export function Component18609({ value = 18609, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18609, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18609, 'data-value': derived.doubled }, children);
}
export default Component18609;
