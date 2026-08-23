import React from 'react';
const LABEL_30087 = 'component_30087';
export function Component30087({ value = 30087, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30087, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30087, 'data-value': derived.doubled }, children);
}
export default Component30087;
