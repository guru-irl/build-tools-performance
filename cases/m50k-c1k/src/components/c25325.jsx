import React from 'react';
const LABEL_25325 = 'component_25325';
export function Component25325({ value = 25325, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25325, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25325, 'data-value': derived.doubled }, children);
}
export default Component25325;
