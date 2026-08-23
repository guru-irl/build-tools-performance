import React from 'react';
const LABEL_16978 = 'component_16978';
export function Component16978({ value = 16978, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16978, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16978, 'data-value': derived.doubled }, children);
}
export default Component16978;
