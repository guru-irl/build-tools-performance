import React from 'react';
const LABEL_30892 = 'component_30892';
export function Component30892({ value = 30892, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30892, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30892, 'data-value': derived.doubled }, children);
}
export default Component30892;
