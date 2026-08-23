import React from 'react';
const LABEL_24317 = 'component_24317';
export function Component24317({ value = 24317, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24317, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24317, 'data-value': derived.doubled }, children);
}
export default Component24317;
