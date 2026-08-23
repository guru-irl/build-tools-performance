import React from 'react';
const LABEL_35755 = 'component_35755';
export function Component35755({ value = 35755, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35755, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35755, 'data-value': derived.doubled }, children);
}
export default Component35755;
