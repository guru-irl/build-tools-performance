import React from 'react';
const LABEL_15456 = 'component_15456';
export function Component15456({ value = 15456, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15456, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15456, 'data-value': derived.doubled }, children);
}
export default Component15456;
