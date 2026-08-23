import React from 'react';
const LABEL_34630 = 'component_34630';
export function Component34630({ value = 34630, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34630, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34630, 'data-value': derived.doubled }, children);
}
export default Component34630;
