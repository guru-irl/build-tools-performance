import React from 'react';
const LABEL_37277 = 'component_37277';
export function Component37277({ value = 37277, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37277, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37277, 'data-value': derived.doubled }, children);
}
export default Component37277;
