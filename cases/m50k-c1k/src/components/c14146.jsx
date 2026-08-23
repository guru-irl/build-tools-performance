import React from 'react';
const LABEL_14146 = 'component_14146';
export function Component14146({ value = 14146, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14146, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14146, 'data-value': derived.doubled }, children);
}
export default Component14146;
