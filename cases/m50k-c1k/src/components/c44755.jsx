import React from 'react';
const LABEL_44755 = 'component_44755';
export function Component44755({ value = 44755, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44755, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44755, 'data-value': derived.doubled }, children);
}
export default Component44755;
