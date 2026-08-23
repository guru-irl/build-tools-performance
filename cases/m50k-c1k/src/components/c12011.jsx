import React from 'react';
const LABEL_12011 = 'component_12011';
export function Component12011({ value = 12011, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12011, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12011, 'data-value': derived.doubled }, children);
}
export default Component12011;
