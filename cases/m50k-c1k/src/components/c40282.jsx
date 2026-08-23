import React from 'react';
const LABEL_40282 = 'component_40282';
export function Component40282({ value = 40282, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40282, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40282, 'data-value': derived.doubled }, children);
}
export default Component40282;
