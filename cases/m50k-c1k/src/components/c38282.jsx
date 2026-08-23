import React from 'react';
const LABEL_38282 = 'component_38282';
export function Component38282({ value = 38282, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38282, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38282, 'data-value': derived.doubled }, children);
}
export default Component38282;
