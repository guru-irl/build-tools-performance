import React from 'react';
const LABEL_36940 = 'component_36940';
export function Component36940({ value = 36940, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36940, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36940, 'data-value': derived.doubled }, children);
}
export default Component36940;
