import React from 'react';
const LABEL_11266 = 'component_11266';
export function Component11266({ value = 11266, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11266, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11266, 'data-value': derived.doubled }, children);
}
export default Component11266;
