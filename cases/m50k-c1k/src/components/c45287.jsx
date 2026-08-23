import React from 'react';
const LABEL_45287 = 'component_45287';
export function Component45287({ value = 45287, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45287, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45287, 'data-value': derived.doubled }, children);
}
export default Component45287;
