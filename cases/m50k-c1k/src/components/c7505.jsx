import React from 'react';
const LABEL_7505 = 'component_7505';
export function Component7505({ value = 7505, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7505, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7505, 'data-value': derived.doubled }, children);
}
export default Component7505;
