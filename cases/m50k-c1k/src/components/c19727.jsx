import React from 'react';
const LABEL_19727 = 'component_19727';
export function Component19727({ value = 19727, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19727, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19727, 'data-value': derived.doubled }, children);
}
export default Component19727;
