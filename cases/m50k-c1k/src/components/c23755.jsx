import React from 'react';
const LABEL_23755 = 'component_23755';
export function Component23755({ value = 23755, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23755, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23755, 'data-value': derived.doubled }, children);
}
export default Component23755;
