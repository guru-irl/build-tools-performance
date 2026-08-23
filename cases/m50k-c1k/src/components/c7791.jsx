import React from 'react';
const LABEL_7791 = 'component_7791';
export function Component7791({ value = 7791, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7791, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7791, 'data-value': derived.doubled }, children);
}
export default Component7791;
