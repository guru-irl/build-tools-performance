import React from 'react';
const LABEL_14442 = 'component_14442';
export function Component14442({ value = 14442, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14442, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14442, 'data-value': derived.doubled }, children);
}
export default Component14442;
