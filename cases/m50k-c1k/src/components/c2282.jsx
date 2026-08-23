import React from 'react';
const LABEL_2282 = 'component_2282';
export function Component2282({ value = 2282, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2282, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2282, 'data-value': derived.doubled }, children);
}
export default Component2282;
