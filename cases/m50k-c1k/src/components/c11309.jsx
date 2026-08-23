import React from 'react';
const LABEL_11309 = 'component_11309';
export function Component11309({ value = 11309, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11309, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11309, 'data-value': derived.doubled }, children);
}
export default Component11309;
