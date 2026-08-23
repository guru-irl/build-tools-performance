import React from 'react';
const LABEL_45309 = 'component_45309';
export function Component45309({ value = 45309, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45309, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45309, 'data-value': derived.doubled }, children);
}
export default Component45309;
