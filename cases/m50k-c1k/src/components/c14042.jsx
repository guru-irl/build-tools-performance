import React from 'react';
const LABEL_14042 = 'component_14042';
export function Component14042({ value = 14042, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14042, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14042, 'data-value': derived.doubled }, children);
}
export default Component14042;
