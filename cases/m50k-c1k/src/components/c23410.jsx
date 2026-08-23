import React from 'react';
const LABEL_23410 = 'component_23410';
export function Component23410({ value = 23410, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23410, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23410, 'data-value': derived.doubled }, children);
}
export default Component23410;
