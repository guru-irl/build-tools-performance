import React from 'react';
const LABEL_11656 = 'component_11656';
export function Component11656({ value = 11656, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11656, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11656, 'data-value': derived.doubled }, children);
}
export default Component11656;
