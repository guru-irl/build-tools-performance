import React from 'react';
const LABEL_30168 = 'component_30168';
export function Component30168({ value = 30168, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30168, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30168, 'data-value': derived.doubled }, children);
}
export default Component30168;
