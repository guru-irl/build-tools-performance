import React from 'react';
const LABEL_11054 = 'component_11054';
export function Component11054({ value = 11054, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11054, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11054, 'data-value': derived.doubled }, children);
}
export default Component11054;
