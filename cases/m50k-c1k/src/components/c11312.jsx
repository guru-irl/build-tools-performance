import React from 'react';
const LABEL_11312 = 'component_11312';
export function Component11312({ value = 11312, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11312, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11312, 'data-value': derived.doubled }, children);
}
export default Component11312;
