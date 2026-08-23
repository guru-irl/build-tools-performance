import React from 'react';
const LABEL_25838 = 'component_25838';
export function Component25838({ value = 25838, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25838, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25838, 'data-value': derived.doubled }, children);
}
export default Component25838;
