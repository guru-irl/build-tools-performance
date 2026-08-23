import React from 'react';
const LABEL_17282 = 'component_17282';
export function Component17282({ value = 17282, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17282, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17282, 'data-value': derived.doubled }, children);
}
export default Component17282;
