import React from 'react';
const LABEL_25027 = 'component_25027';
export function Component25027({ value = 25027, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25027, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25027, 'data-value': derived.doubled }, children);
}
export default Component25027;
