import React from 'react';
const LABEL_24867 = 'component_24867';
export function Component24867({ value = 24867, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24867, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24867, 'data-value': derived.doubled }, children);
}
export default Component24867;
