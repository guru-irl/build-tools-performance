import React from 'react';
const LABEL_25522 = 'component_25522';
export function Component25522({ value = 25522, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25522, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25522, 'data-value': derived.doubled }, children);
}
export default Component25522;
