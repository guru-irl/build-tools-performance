import React from 'react';
const LABEL_21230 = 'component_21230';
export function Component21230({ value = 21230, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21230, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21230, 'data-value': derived.doubled }, children);
}
export default Component21230;
