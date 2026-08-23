import React from 'react';
const LABEL_35144 = 'component_35144';
export function Component35144({ value = 35144, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35144, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35144, 'data-value': derived.doubled }, children);
}
export default Component35144;
