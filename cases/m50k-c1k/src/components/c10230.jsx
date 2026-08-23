import React from 'react';
const LABEL_10230 = 'component_10230';
export function Component10230({ value = 10230, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10230, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10230, 'data-value': derived.doubled }, children);
}
export default Component10230;
