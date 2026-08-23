import React from 'react';
const LABEL_14306 = 'component_14306';
export function Component14306({ value = 14306, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14306, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14306, 'data-value': derived.doubled }, children);
}
export default Component14306;
