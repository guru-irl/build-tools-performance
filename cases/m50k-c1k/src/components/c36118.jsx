import React from 'react';
const LABEL_36118 = 'component_36118';
export function Component36118({ value = 36118, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36118, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36118, 'data-value': derived.doubled }, children);
}
export default Component36118;
