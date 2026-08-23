import React from 'react';
const LABEL_18098 = 'component_18098';
export function Component18098({ value = 18098, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18098, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18098, 'data-value': derived.doubled }, children);
}
export default Component18098;
