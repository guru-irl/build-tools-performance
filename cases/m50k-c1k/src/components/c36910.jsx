import React from 'react';
const LABEL_36910 = 'component_36910';
export function Component36910({ value = 36910, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36910, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36910, 'data-value': derived.doubled }, children);
}
export default Component36910;
