import React from 'react';
const LABEL_25473 = 'component_25473';
export function Component25473({ value = 25473, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25473, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25473, 'data-value': derived.doubled }, children);
}
export default Component25473;
