import React from 'react';
const LABEL_25975 = 'component_25975';
export function Component25975({ value = 25975, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25975, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25975, 'data-value': derived.doubled }, children);
}
export default Component25975;
