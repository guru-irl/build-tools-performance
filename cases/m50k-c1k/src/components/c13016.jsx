import React from 'react';
const LABEL_13016 = 'component_13016';
export function Component13016({ value = 13016, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13016, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13016, 'data-value': derived.doubled }, children);
}
export default Component13016;
