import React from 'react';
const LABEL_11755 = 'component_11755';
export function Component11755({ value = 11755, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11755, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11755, 'data-value': derived.doubled }, children);
}
export default Component11755;
