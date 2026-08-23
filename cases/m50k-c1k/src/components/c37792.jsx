import React from 'react';
const LABEL_37792 = 'component_37792';
export function Component37792({ value = 37792, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37792, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37792, 'data-value': derived.doubled }, children);
}
export default Component37792;
