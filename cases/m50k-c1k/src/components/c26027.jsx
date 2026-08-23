import React from 'react';
const LABEL_26027 = 'component_26027';
export function Component26027({ value = 26027, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26027, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26027, 'data-value': derived.doubled }, children);
}
export default Component26027;
