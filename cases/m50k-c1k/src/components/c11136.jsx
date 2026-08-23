import React from 'react';
const LABEL_11136 = 'component_11136';
export function Component11136({ value = 11136, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11136, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11136, 'data-value': derived.doubled }, children);
}
export default Component11136;
