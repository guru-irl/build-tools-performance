import React from 'react';
const LABEL_309 = 'component_309';
export function Component309({ value = 309, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_309, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_309, 'data-value': derived.doubled }, children);
}
export default Component309;
