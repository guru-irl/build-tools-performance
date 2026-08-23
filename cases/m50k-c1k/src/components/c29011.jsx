import React from 'react';
const LABEL_29011 = 'component_29011';
export function Component29011({ value = 29011, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29011, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29011, 'data-value': derived.doubled }, children);
}
export default Component29011;
