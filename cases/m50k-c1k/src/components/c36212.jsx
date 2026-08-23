import React from 'react';
const LABEL_36212 = 'component_36212';
export function Component36212({ value = 36212, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36212, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36212, 'data-value': derived.doubled }, children);
}
export default Component36212;
