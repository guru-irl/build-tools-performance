import React from 'react';
const LABEL_4428 = 'component_4428';
export function Component4428({ value = 4428, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4428, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4428, 'data-value': derived.doubled }, children);
}
export default Component4428;
