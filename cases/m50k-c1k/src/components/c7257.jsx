import React from 'react';
const LABEL_7257 = 'component_7257';
export function Component7257({ value = 7257, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7257, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7257, 'data-value': derived.doubled }, children);
}
export default Component7257;
