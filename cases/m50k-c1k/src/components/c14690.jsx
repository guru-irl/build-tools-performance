import React from 'react';
const LABEL_14690 = 'component_14690';
export function Component14690({ value = 14690, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14690, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14690, 'data-value': derived.doubled }, children);
}
export default Component14690;
