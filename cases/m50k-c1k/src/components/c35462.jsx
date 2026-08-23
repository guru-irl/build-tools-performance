import React from 'react';
const LABEL_35462 = 'component_35462';
export function Component35462({ value = 35462, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35462, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35462, 'data-value': derived.doubled }, children);
}
export default Component35462;
