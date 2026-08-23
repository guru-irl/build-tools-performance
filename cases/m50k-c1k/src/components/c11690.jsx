import React from 'react';
const LABEL_11690 = 'component_11690';
export function Component11690({ value = 11690, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11690, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11690, 'data-value': derived.doubled }, children);
}
export default Component11690;
