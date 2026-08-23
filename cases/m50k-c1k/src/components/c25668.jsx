import React from 'react';
const LABEL_25668 = 'component_25668';
export function Component25668({ value = 25668, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25668, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25668, 'data-value': derived.doubled }, children);
}
export default Component25668;
