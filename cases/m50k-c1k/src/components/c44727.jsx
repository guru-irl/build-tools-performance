import React from 'react';
const LABEL_44727 = 'component_44727';
export function Component44727({ value = 44727, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44727, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44727, 'data-value': derived.doubled }, children);
}
export default Component44727;
