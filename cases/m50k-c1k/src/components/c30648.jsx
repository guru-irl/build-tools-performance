import React from 'react';
const LABEL_30648 = 'component_30648';
export function Component30648({ value = 30648, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30648, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30648, 'data-value': derived.doubled }, children);
}
export default Component30648;
