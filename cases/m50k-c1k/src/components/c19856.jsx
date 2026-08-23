import React from 'react';
const LABEL_19856 = 'component_19856';
export function Component19856({ value = 19856, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19856, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19856, 'data-value': derived.doubled }, children);
}
export default Component19856;
