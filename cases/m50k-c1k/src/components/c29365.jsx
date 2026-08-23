import React from 'react';
const LABEL_29365 = 'component_29365';
export function Component29365({ value = 29365, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29365, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29365, 'data-value': derived.doubled }, children);
}
export default Component29365;
