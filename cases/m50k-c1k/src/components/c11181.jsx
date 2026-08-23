import React from 'react';
const LABEL_11181 = 'component_11181';
export function Component11181({ value = 11181, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11181, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11181, 'data-value': derived.doubled }, children);
}
export default Component11181;
