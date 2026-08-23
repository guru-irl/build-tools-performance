import React from 'react';
const LABEL_41600 = 'component_41600';
export function Component41600({ value = 41600, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41600, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41600, 'data-value': derived.doubled }, children);
}
export default Component41600;
