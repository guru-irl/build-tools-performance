import React from 'react';
const LABEL_20624 = 'component_20624';
export function Component20624({ value = 20624, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20624, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20624, 'data-value': derived.doubled }, children);
}
export default Component20624;
