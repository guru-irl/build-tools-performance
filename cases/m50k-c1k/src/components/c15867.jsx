import React from 'react';
const LABEL_15867 = 'component_15867';
export function Component15867({ value = 15867, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15867, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15867, 'data-value': derived.doubled }, children);
}
export default Component15867;
