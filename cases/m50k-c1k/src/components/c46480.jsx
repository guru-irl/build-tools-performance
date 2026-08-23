import React from 'react';
const LABEL_46480 = 'component_46480';
export function Component46480({ value = 46480, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46480, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46480, 'data-value': derived.doubled }, children);
}
export default Component46480;
