import React from 'react';
const LABEL_20816 = 'component_20816';
export function Component20816({ value = 20816, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20816, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20816, 'data-value': derived.doubled }, children);
}
export default Component20816;
