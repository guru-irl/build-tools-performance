import React from 'react';
const LABEL_28009 = 'component_28009';
export function Component28009({ value = 28009, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28009, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28009, 'data-value': derived.doubled }, children);
}
export default Component28009;
