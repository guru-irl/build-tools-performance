import React from 'react';
const LABEL_4579 = 'component_4579';
export function Component4579({ value = 4579, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4579, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4579, 'data-value': derived.doubled }, children);
}
export default Component4579;
