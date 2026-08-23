import React from 'react';
const LABEL_11696 = 'component_11696';
export function Component11696({ value = 11696, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11696, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11696, 'data-value': derived.doubled }, children);
}
export default Component11696;
