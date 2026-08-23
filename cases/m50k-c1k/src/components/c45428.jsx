import React from 'react';
const LABEL_45428 = 'component_45428';
export function Component45428({ value = 45428, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45428, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45428, 'data-value': derived.doubled }, children);
}
export default Component45428;
