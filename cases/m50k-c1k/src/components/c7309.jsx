import React from 'react';
const LABEL_7309 = 'component_7309';
export function Component7309({ value = 7309, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7309, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7309, 'data-value': derived.doubled }, children);
}
export default Component7309;
