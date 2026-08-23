import React from 'react';
const LABEL_25016 = 'component_25016';
export function Component25016({ value = 25016, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25016, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25016, 'data-value': derived.doubled }, children);
}
export default Component25016;
