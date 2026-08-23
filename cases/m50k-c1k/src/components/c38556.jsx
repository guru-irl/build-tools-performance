import React from 'react';
const LABEL_38556 = 'component_38556';
export function Component38556({ value = 38556, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38556, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38556, 'data-value': derived.doubled }, children);
}
export default Component38556;
