import React from 'react';
const LABEL_15146 = 'component_15146';
export function Component15146({ value = 15146, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15146, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15146, 'data-value': derived.doubled }, children);
}
export default Component15146;
