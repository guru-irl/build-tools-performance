import React from 'react';
const LABEL_36441 = 'component_36441';
export function Component36441({ value = 36441, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36441, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36441, 'data-value': derived.doubled }, children);
}
export default Component36441;
