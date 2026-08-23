import React from 'react';
const LABEL_25688 = 'component_25688';
export function Component25688({ value = 25688, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25688, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25688, 'data-value': derived.doubled }, children);
}
export default Component25688;
