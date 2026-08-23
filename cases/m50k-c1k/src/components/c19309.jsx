import React from 'react';
const LABEL_19309 = 'component_19309';
export function Component19309({ value = 19309, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19309, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19309, 'data-value': derived.doubled }, children);
}
export default Component19309;
