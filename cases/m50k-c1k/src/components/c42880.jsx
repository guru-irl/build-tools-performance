import React from 'react';
const LABEL_42880 = 'component_42880';
export function Component42880({ value = 42880, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42880, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42880, 'data-value': derived.doubled }, children);
}
export default Component42880;
