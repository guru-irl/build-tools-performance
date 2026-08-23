import React from 'react';
const LABEL_7411 = 'component_7411';
export function Component7411({ value = 7411, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7411, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7411, 'data-value': derived.doubled }, children);
}
export default Component7411;
