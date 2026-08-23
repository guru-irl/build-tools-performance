import React from 'react';
const LABEL_11579 = 'component_11579';
export function Component11579({ value = 11579, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11579, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11579, 'data-value': derived.doubled }, children);
}
export default Component11579;
