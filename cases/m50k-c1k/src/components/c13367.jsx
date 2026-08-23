import React from 'react';
const LABEL_13367 = 'component_13367';
export function Component13367({ value = 13367, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13367, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13367, 'data-value': derived.doubled }, children);
}
export default Component13367;
