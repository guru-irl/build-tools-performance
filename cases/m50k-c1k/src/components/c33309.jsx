import React from 'react';
const LABEL_33309 = 'component_33309';
export function Component33309({ value = 33309, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33309, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33309, 'data-value': derived.doubled }, children);
}
export default Component33309;
