import React from 'react';
const LABEL_29724 = 'component_29724';
export function Component29724({ value = 29724, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29724, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29724, 'data-value': derived.doubled }, children);
}
export default Component29724;
