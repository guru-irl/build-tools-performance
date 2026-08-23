import React from 'react';
const LABEL_20278 = 'component_20278';
export function Component20278({ value = 20278, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20278, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20278, 'data-value': derived.doubled }, children);
}
export default Component20278;
