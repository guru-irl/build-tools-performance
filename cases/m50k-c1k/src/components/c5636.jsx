import React from 'react';
const LABEL_5636 = 'component_5636';
export function Component5636({ value = 5636, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5636, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5636, 'data-value': derived.doubled }, children);
}
export default Component5636;
