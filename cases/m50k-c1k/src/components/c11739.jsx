import React from 'react';
const LABEL_11739 = 'component_11739';
export function Component11739({ value = 11739, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11739, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11739, 'data-value': derived.doubled }, children);
}
export default Component11739;
