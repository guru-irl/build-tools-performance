import React from 'react';
const LABEL_23230 = 'component_23230';
export function Component23230({ value = 23230, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23230, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23230, 'data-value': derived.doubled }, children);
}
export default Component23230;
