import React from 'react';
const LABEL_46309 = 'component_46309';
export function Component46309({ value = 46309, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46309, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46309, 'data-value': derived.doubled }, children);
}
export default Component46309;
