import React from 'react';
const LABEL_30072 = 'component_30072';
export function Component30072({ value = 30072, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30072, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30072, 'data-value': derived.doubled }, children);
}
export default Component30072;
