import React from 'react';
const LABEL_42856 = 'component_42856';
export function Component42856({ value = 42856, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42856, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42856, 'data-value': derived.doubled }, children);
}
export default Component42856;
