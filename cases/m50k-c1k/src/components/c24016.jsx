import React from 'react';
const LABEL_24016 = 'component_24016';
export function Component24016({ value = 24016, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24016, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24016, 'data-value': derived.doubled }, children);
}
export default Component24016;
