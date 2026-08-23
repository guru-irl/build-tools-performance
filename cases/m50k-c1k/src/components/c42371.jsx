import React from 'react';
const LABEL_42371 = 'component_42371';
export function Component42371({ value = 42371, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42371, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42371, 'data-value': derived.doubled }, children);
}
export default Component42371;
