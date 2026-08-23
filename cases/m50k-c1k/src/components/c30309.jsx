import React from 'react';
const LABEL_30309 = 'component_30309';
export function Component30309({ value = 30309, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30309, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30309, 'data-value': derived.doubled }, children);
}
export default Component30309;
