import React from 'react';
const LABEL_12801 = 'component_12801';
export function Component12801({ value = 12801, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12801, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12801, 'data-value': derived.doubled }, children);
}
export default Component12801;
