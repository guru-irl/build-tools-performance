import React from 'react';
const LABEL_20656 = 'component_20656';
export function Component20656({ value = 20656, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20656, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20656, 'data-value': derived.doubled }, children);
}
export default Component20656;
