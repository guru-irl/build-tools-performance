import React from 'react';
const LABEL_31309 = 'component_31309';
export function Component31309({ value = 31309, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31309, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31309, 'data-value': derived.doubled }, children);
}
export default Component31309;
