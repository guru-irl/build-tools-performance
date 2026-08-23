import React from 'react';
const LABEL_5136 = 'component_5136';
export function Component5136({ value = 5136, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5136, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5136, 'data-value': derived.doubled }, children);
}
export default Component5136;
