import React from 'react';
const LABEL_35165 = 'component_35165';
export function Component35165({ value = 35165, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35165, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35165, 'data-value': derived.doubled }, children);
}
export default Component35165;
