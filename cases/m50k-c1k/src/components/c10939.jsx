import React from 'react';
const LABEL_10939 = 'component_10939';
export function Component10939({ value = 10939, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10939, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10939, 'data-value': derived.doubled }, children);
}
export default Component10939;
