import React from 'react';
const LABEL_26428 = 'component_26428';
export function Component26428({ value = 26428, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26428, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26428, 'data-value': derived.doubled }, children);
}
export default Component26428;
