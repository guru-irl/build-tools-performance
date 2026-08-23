import React from 'react';
const LABEL_25656 = 'component_25656';
export function Component25656({ value = 25656, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25656, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25656, 'data-value': derived.doubled }, children);
}
export default Component25656;
