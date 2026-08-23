import React from 'react';
const LABEL_25282 = 'component_25282';
export function Component25282({ value = 25282, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25282, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25282, 'data-value': derived.doubled }, children);
}
export default Component25282;
