import React from 'react';
const LABEL_18016 = 'component_18016';
export function Component18016({ value = 18016, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18016, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18016, 'data-value': derived.doubled }, children);
}
export default Component18016;
