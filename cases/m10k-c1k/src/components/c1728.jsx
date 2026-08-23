import React from 'react';
const LABEL_1728 = 'component_1728';
export function Component1728({ value = 1728, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1728, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1728, 'data-value': derived.doubled }, children);
}
export default Component1728;
