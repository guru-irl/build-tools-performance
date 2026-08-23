import React from 'react';
const LABEL_7282 = 'component_7282';
export function Component7282({ value = 7282, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7282, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7282, 'data-value': derived.doubled }, children);
}
export default Component7282;
