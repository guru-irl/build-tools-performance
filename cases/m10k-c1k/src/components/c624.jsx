import React from 'react';
const LABEL_624 = 'component_624';
export function Component624({ value = 624, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_624, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_624, 'data-value': derived.doubled }, children);
}
export default Component624;
