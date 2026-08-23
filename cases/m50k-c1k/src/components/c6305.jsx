import React from 'react';
const LABEL_6305 = 'component_6305';
export function Component6305({ value = 6305, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6305, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6305, 'data-value': derived.doubled }, children);
}
export default Component6305;
