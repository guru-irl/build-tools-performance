import React from 'react';
const LABEL_10282 = 'component_10282';
export function Component10282({ value = 10282, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10282, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10282, 'data-value': derived.doubled }, children);
}
export default Component10282;
