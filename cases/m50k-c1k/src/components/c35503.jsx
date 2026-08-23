import React from 'react';
const LABEL_35503 = 'component_35503';
export function Component35503({ value = 35503, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35503, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35503, 'data-value': derived.doubled }, children);
}
export default Component35503;
