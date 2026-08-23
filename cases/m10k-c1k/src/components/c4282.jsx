import React from 'react';
const LABEL_4282 = 'component_4282';
export function Component4282({ value = 4282, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4282, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4282, 'data-value': derived.doubled }, children);
}
export default Component4282;
