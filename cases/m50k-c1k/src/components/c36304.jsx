import React from 'react';
const LABEL_36304 = 'component_36304';
export function Component36304({ value = 36304, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36304, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36304, 'data-value': derived.doubled }, children);
}
export default Component36304;
