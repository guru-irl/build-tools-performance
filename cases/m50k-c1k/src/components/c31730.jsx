import React from 'react';
const LABEL_31730 = 'component_31730';
export function Component31730({ value = 31730, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31730, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31730, 'data-value': derived.doubled }, children);
}
export default Component31730;
