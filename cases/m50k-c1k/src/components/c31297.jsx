import React from 'react';
const LABEL_31297 = 'component_31297';
export function Component31297({ value = 31297, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31297, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31297, 'data-value': derived.doubled }, children);
}
export default Component31297;
