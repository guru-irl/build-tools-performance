import React from 'react';
const LABEL_24309 = 'component_24309';
export function Component24309({ value = 24309, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24309, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24309, 'data-value': derived.doubled }, children);
}
export default Component24309;
