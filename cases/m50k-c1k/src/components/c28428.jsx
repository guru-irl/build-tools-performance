import React from 'react';
const LABEL_28428 = 'component_28428';
export function Component28428({ value = 28428, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28428, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28428, 'data-value': derived.doubled }, children);
}
export default Component28428;
