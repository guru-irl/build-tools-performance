import React from 'react';
const LABEL_25780 = 'component_25780';
export function Component25780({ value = 25780, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25780, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25780, 'data-value': derived.doubled }, children);
}
export default Component25780;
