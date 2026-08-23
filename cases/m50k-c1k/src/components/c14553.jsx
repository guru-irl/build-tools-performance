import React from 'react';
const LABEL_14553 = 'component_14553';
export function Component14553({ value = 14553, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14553, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14553, 'data-value': derived.doubled }, children);
}
export default Component14553;
