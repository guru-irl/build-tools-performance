import React from 'react';
const LABEL_6730 = 'component_6730';
export function Component6730({ value = 6730, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6730, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6730, 'data-value': derived.doubled }, children);
}
export default Component6730;
