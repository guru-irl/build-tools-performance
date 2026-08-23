import React from 'react';
const LABEL_41574 = 'component_41574';
export function Component41574({ value = 41574, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41574, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41574, 'data-value': derived.doubled }, children);
}
export default Component41574;
