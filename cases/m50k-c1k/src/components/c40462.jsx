import React from 'react';
const LABEL_40462 = 'component_40462';
export function Component40462({ value = 40462, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40462, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40462, 'data-value': derived.doubled }, children);
}
export default Component40462;
