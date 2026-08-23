import React from 'react';
const LABEL_10392 = 'component_10392';
export function Component10392({ value = 10392, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10392, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10392, 'data-value': derived.doubled }, children);
}
export default Component10392;
