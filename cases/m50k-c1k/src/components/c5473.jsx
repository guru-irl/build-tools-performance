import React from 'react';
const LABEL_5473 = 'component_5473';
export function Component5473({ value = 5473, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5473, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5473, 'data-value': derived.doubled }, children);
}
export default Component5473;
