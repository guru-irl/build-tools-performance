import React from 'react';
const LABEL_5505 = 'component_5505';
export function Component5505({ value = 5505, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5505, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5505, 'data-value': derived.doubled }, children);
}
export default Component5505;
