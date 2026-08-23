import React from 'react';
const LABEL_26282 = 'component_26282';
export function Component26282({ value = 26282, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26282, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26282, 'data-value': derived.doubled }, children);
}
export default Component26282;
