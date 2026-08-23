import React from 'react';
const LABEL_30962 = 'component_30962';
export function Component30962({ value = 30962, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30962, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30962, 'data-value': derived.doubled }, children);
}
export default Component30962;
