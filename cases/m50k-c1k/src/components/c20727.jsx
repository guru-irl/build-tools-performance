import React from 'react';
const LABEL_20727 = 'component_20727';
export function Component20727({ value = 20727, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20727, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20727, 'data-value': derived.doubled }, children);
}
export default Component20727;
