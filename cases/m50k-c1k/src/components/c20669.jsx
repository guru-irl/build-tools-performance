import React from 'react';
const LABEL_20669 = 'component_20669';
export function Component20669({ value = 20669, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20669, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20669, 'data-value': derived.doubled }, children);
}
export default Component20669;
