import React from 'react';
const LABEL_26950 = 'component_26950';
export function Component26950({ value = 26950, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26950, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26950, 'data-value': derived.doubled }, children);
}
export default Component26950;
