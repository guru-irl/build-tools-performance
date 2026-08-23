import React from 'react';
const LABEL_38800 = 'component_38800';
export function Component38800({ value = 38800, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38800, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38800, 'data-value': derived.doubled }, children);
}
export default Component38800;
