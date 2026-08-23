import React from 'react';
const LABEL_11218 = 'component_11218';
export function Component11218({ value = 11218, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11218, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11218, 'data-value': derived.doubled }, children);
}
export default Component11218;
