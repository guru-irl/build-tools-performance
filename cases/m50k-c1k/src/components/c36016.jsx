import React from 'react';
const LABEL_36016 = 'component_36016';
export function Component36016({ value = 36016, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36016, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36016, 'data-value': derived.doubled }, children);
}
export default Component36016;
