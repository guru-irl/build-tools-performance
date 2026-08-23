import React from 'react';
const LABEL_2309 = 'component_2309';
export function Component2309({ value = 2309, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2309, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2309, 'data-value': derived.doubled }, children);
}
export default Component2309;
