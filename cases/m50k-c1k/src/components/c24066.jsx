import React from 'react';
const LABEL_24066 = 'component_24066';
export function Component24066({ value = 24066, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24066, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24066, 'data-value': derived.doubled }, children);
}
export default Component24066;
