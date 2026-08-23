import React from 'react';
const LABEL_25554 = 'component_25554';
export function Component25554({ value = 25554, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25554, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25554, 'data-value': derived.doubled }, children);
}
export default Component25554;
