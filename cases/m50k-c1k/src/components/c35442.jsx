import React from 'react';
const LABEL_35442 = 'component_35442';
export function Component35442({ value = 35442, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35442, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35442, 'data-value': derived.doubled }, children);
}
export default Component35442;
