import React from 'react';
const LABEL_25982 = 'component_25982';
export function Component25982({ value = 25982, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25982, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25982, 'data-value': derived.doubled }, children);
}
export default Component25982;
