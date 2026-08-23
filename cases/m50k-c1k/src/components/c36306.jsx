import React from 'react';
const LABEL_36306 = 'component_36306';
export function Component36306({ value = 36306, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36306, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36306, 'data-value': derived.doubled }, children);
}
export default Component36306;
