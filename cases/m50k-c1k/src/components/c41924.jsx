import React from 'react';
const LABEL_41924 = 'component_41924';
export function Component41924({ value = 41924, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41924, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41924, 'data-value': derived.doubled }, children);
}
export default Component41924;
