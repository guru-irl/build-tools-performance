import React from 'react';
const LABEL_8428 = 'component_8428';
export function Component8428({ value = 8428, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8428, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8428, 'data-value': derived.doubled }, children);
}
export default Component8428;
