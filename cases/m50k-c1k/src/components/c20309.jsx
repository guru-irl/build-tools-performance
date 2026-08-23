import React from 'react';
const LABEL_20309 = 'component_20309';
export function Component20309({ value = 20309, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20309, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20309, 'data-value': derived.doubled }, children);
}
export default Component20309;
