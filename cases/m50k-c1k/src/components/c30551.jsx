import React from 'react';
const LABEL_30551 = 'component_30551';
export function Component30551({ value = 30551, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30551, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30551, 'data-value': derived.doubled }, children);
}
export default Component30551;
