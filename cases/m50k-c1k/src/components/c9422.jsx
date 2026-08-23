import React from 'react';
const LABEL_9422 = 'component_9422';
export function Component9422({ value = 9422, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9422, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9422, 'data-value': derived.doubled }, children);
}
export default Component9422;
