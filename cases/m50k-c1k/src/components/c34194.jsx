import React from 'react';
const LABEL_34194 = 'component_34194';
export function Component34194({ value = 34194, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34194, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34194, 'data-value': derived.doubled }, children);
}
export default Component34194;
