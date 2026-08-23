import React from 'react';
const LABEL_39730 = 'component_39730';
export function Component39730({ value = 39730, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39730, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39730, 'data-value': derived.doubled }, children);
}
export default Component39730;
