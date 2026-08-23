import React from 'react';
const LABEL_24978 = 'component_24978';
export function Component24978({ value = 24978, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24978, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24978, 'data-value': derived.doubled }, children);
}
export default Component24978;
