import React from 'react';
const LABEL_11048 = 'component_11048';
export function Component11048({ value = 11048, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11048, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11048, 'data-value': derived.doubled }, children);
}
export default Component11048;
