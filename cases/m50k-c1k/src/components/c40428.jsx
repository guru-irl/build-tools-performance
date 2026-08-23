import React from 'react';
const LABEL_40428 = 'component_40428';
export function Component40428({ value = 40428, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40428, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40428, 'data-value': derived.doubled }, children);
}
export default Component40428;
