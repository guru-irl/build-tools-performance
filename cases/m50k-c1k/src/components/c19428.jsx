import React from 'react';
const LABEL_19428 = 'component_19428';
export function Component19428({ value = 19428, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19428, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19428, 'data-value': derived.doubled }, children);
}
export default Component19428;
