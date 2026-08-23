import React from 'react';
const LABEL_46466 = 'component_46466';
export function Component46466({ value = 46466, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46466, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46466, 'data-value': derived.doubled }, children);
}
export default Component46466;
