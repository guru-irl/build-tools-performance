import React from 'react';
const LABEL_30499 = 'component_30499';
export function Component30499({ value = 30499, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30499, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30499, 'data-value': derived.doubled }, children);
}
export default Component30499;
