import React from 'react';
const LABEL_38700 = 'component_38700';
export function Component38700({ value = 38700, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38700, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38700, 'data-value': derived.doubled }, children);
}
export default Component38700;
