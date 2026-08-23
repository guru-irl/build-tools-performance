import React from 'react';
const LABEL_33016 = 'component_33016';
export function Component33016({ value = 33016, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33016, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33016, 'data-value': derived.doubled }, children);
}
export default Component33016;
