import React from 'react';
const LABEL_13656 = 'component_13656';
export function Component13656({ value = 13656, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13656, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13656, 'data-value': derived.doubled }, children);
}
export default Component13656;
