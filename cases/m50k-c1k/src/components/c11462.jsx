import React from 'react';
const LABEL_11462 = 'component_11462';
export function Component11462({ value = 11462, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11462, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11462, 'data-value': derived.doubled }, children);
}
export default Component11462;
