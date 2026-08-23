import React from 'react';
const LABEL_24727 = 'component_24727';
export function Component24727({ value = 24727, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24727, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24727, 'data-value': derived.doubled }, children);
}
export default Component24727;
