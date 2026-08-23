import React from 'react';
const LABEL_26257 = 'component_26257';
export function Component26257({ value = 26257, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26257, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26257, 'data-value': derived.doubled }, children);
}
export default Component26257;
