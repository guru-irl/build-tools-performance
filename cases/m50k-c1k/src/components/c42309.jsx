import React from 'react';
const LABEL_42309 = 'component_42309';
export function Component42309({ value = 42309, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42309, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42309, 'data-value': derived.doubled }, children);
}
export default Component42309;
