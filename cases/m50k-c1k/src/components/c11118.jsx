import React from 'react';
const LABEL_11118 = 'component_11118';
export function Component11118({ value = 11118, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11118, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11118, 'data-value': derived.doubled }, children);
}
export default Component11118;
