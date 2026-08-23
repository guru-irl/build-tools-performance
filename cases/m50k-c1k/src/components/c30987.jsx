import React from 'react';
const LABEL_30987 = 'component_30987';
export function Component30987({ value = 30987, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30987, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30987, 'data-value': derived.doubled }, children);
}
export default Component30987;
