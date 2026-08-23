import React from 'react';
const LABEL_34701 = 'component_34701';
export function Component34701({ value = 34701, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34701, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34701, 'data-value': derived.doubled }, children);
}
export default Component34701;
