import React from 'react';
const LABEL_8631 = 'component_8631';
export function Component8631({ value = 8631, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8631, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8631, 'data-value': derived.doubled }, children);
}
export default Component8631;
