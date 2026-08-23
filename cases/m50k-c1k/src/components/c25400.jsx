import React from 'react';
const LABEL_25400 = 'component_25400';
export function Component25400({ value = 25400, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25400, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25400, 'data-value': derived.doubled }, children);
}
export default Component25400;
