import React from 'react';
const LABEL_14441 = 'component_14441';
export function Component14441({ value = 14441, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14441, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14441, 'data-value': derived.doubled }, children);
}
export default Component14441;
