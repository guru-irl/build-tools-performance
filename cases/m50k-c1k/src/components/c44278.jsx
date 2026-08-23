import React from 'react';
const LABEL_44278 = 'component_44278';
export function Component44278({ value = 44278, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44278, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44278, 'data-value': derived.doubled }, children);
}
export default Component44278;
