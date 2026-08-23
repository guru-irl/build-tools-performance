import React from 'react';
const LABEL_40590 = 'component_40590';
export function Component40590({ value = 40590, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40590, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40590, 'data-value': derived.doubled }, children);
}
export default Component40590;
