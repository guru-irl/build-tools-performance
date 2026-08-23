import React from 'react';
const LABEL_36656 = 'component_36656';
export function Component36656({ value = 36656, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36656, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36656, 'data-value': derived.doubled }, children);
}
export default Component36656;
