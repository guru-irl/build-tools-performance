import React from 'react';
const LABEL_19208 = 'component_19208';
export function Component19208({ value = 19208, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19208, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19208, 'data-value': derived.doubled }, children);
}
export default Component19208;
