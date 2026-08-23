import React from 'react';
const LABEL_38428 = 'component_38428';
export function Component38428({ value = 38428, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38428, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38428, 'data-value': derived.doubled }, children);
}
export default Component38428;
