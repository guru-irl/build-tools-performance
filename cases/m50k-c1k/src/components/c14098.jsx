import React from 'react';
const LABEL_14098 = 'component_14098';
export function Component14098({ value = 14098, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14098, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14098, 'data-value': derived.doubled }, children);
}
export default Component14098;
