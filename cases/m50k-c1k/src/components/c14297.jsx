import React from 'react';
const LABEL_14297 = 'component_14297';
export function Component14297({ value = 14297, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14297, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14297, 'data-value': derived.doubled }, children);
}
export default Component14297;
