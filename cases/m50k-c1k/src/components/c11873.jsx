import React from 'react';
const LABEL_11873 = 'component_11873';
export function Component11873({ value = 11873, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11873, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11873, 'data-value': derived.doubled }, children);
}
export default Component11873;
