import React from 'react';
const LABEL_5727 = 'component_5727';
export function Component5727({ value = 5727, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5727, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5727, 'data-value': derived.doubled }, children);
}
export default Component5727;
