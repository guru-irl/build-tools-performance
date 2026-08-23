import React from 'react';
const LABEL_21472 = 'component_21472';
export function Component21472({ value = 21472, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21472, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21472, 'data-value': derived.doubled }, children);
}
export default Component21472;
