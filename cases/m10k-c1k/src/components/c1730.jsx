import React from 'react';
const LABEL_1730 = 'component_1730';
export function Component1730({ value = 1730, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1730, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1730, 'data-value': derived.doubled }, children);
}
export default Component1730;
