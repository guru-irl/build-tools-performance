import React from 'react';
const LABEL_8309 = 'component_8309';
export function Component8309({ value = 8309, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8309, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8309, 'data-value': derived.doubled }, children);
}
export default Component8309;
