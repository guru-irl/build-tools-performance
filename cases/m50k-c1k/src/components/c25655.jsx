import React from 'react';
const LABEL_25655 = 'component_25655';
export function Component25655({ value = 25655, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25655, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25655, 'data-value': derived.doubled }, children);
}
export default Component25655;
