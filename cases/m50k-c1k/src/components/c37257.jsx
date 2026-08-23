import React from 'react';
const LABEL_37257 = 'component_37257';
export function Component37257({ value = 37257, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37257, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37257, 'data-value': derived.doubled }, children);
}
export default Component37257;
