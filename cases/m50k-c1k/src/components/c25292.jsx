import React from 'react';
const LABEL_25292 = 'component_25292';
export function Component25292({ value = 25292, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25292, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25292, 'data-value': derived.doubled }, children);
}
export default Component25292;
