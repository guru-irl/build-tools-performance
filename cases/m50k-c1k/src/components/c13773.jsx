import React from 'react';
const LABEL_13773 = 'component_13773';
export function Component13773({ value = 13773, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13773, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13773, 'data-value': derived.doubled }, children);
}
export default Component13773;
