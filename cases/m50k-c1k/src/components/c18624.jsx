import React from 'react';
const LABEL_18624 = 'component_18624';
export function Component18624({ value = 18624, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18624, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18624, 'data-value': derived.doubled }, children);
}
export default Component18624;
