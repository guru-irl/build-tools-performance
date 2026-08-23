import React from 'react';
const LABEL_29442 = 'component_29442';
export function Component29442({ value = 29442, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29442, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29442, 'data-value': derived.doubled }, children);
}
export default Component29442;
