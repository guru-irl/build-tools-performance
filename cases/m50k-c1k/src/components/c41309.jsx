import React from 'react';
const LABEL_41309 = 'component_41309';
export function Component41309({ value = 41309, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41309, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41309, 'data-value': derived.doubled }, children);
}
export default Component41309;
