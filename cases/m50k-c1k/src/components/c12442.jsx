import React from 'react';
const LABEL_12442 = 'component_12442';
export function Component12442({ value = 12442, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12442, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12442, 'data-value': derived.doubled }, children);
}
export default Component12442;
