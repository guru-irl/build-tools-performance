import React from 'react';
const LABEL_40309 = 'component_40309';
export function Component40309({ value = 40309, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40309, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40309, 'data-value': derived.doubled }, children);
}
export default Component40309;
