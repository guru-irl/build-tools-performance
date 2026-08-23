import React from 'react';
const LABEL_45799 = 'component_45799';
export function Component45799({ value = 45799, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45799, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45799, 'data-value': derived.doubled }, children);
}
export default Component45799;
