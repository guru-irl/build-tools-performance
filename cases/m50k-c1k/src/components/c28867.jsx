import React from 'react';
const LABEL_28867 = 'component_28867';
export function Component28867({ value = 28867, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28867, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28867, 'data-value': derived.doubled }, children);
}
export default Component28867;
