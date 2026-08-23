import React from 'react';
const LABEL_37278 = 'component_37278';
export function Component37278({ value = 37278, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37278, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37278, 'data-value': derived.doubled }, children);
}
export default Component37278;
