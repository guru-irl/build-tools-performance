import React from 'react';
const LABEL_18950 = 'component_18950';
export function Component18950({ value = 18950, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18950, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18950, 'data-value': derived.doubled }, children);
}
export default Component18950;
