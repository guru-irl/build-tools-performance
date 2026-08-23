import React from 'react';
const LABEL_11657 = 'component_11657';
export function Component11657({ value = 11657, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11657, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11657, 'data-value': derived.doubled }, children);
}
export default Component11657;
