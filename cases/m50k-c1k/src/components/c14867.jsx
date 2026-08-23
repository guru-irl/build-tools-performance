import React from 'react';
const LABEL_14867 = 'component_14867';
export function Component14867({ value = 14867, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14867, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14867, 'data-value': derived.doubled }, children);
}
export default Component14867;
