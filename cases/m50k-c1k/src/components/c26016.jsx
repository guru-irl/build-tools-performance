import React from 'react';
const LABEL_26016 = 'component_26016';
export function Component26016({ value = 26016, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26016, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26016, 'data-value': derived.doubled }, children);
}
export default Component26016;
