import React from 'react';
const LABEL_30663 = 'component_30663';
export function Component30663({ value = 30663, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30663, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30663, 'data-value': derived.doubled }, children);
}
export default Component30663;
