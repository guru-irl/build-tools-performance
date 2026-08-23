import React from 'react';
const LABEL_35048 = 'component_35048';
export function Component35048({ value = 35048, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35048, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35048, 'data-value': derived.doubled }, children);
}
export default Component35048;
