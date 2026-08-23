import React from 'react';
const LABEL_10505 = 'component_10505';
export function Component10505({ value = 10505, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10505, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10505, 'data-value': derived.doubled }, children);
}
export default Component10505;
