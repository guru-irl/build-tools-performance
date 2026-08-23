import React from 'react';
const LABEL_35347 = 'component_35347';
export function Component35347({ value = 35347, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35347, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35347, 'data-value': derived.doubled }, children);
}
export default Component35347;
