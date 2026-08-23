import React from 'react';
const LABEL_15205 = 'component_15205';
export function Component15205({ value = 15205, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15205, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15205, 'data-value': derived.doubled }, children);
}
export default Component15205;
