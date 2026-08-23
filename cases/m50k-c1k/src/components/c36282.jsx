import React from 'react';
const LABEL_36282 = 'component_36282';
export function Component36282({ value = 36282, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36282, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36282, 'data-value': derived.doubled }, children);
}
export default Component36282;
