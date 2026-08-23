import React from 'react';
const LABEL_44309 = 'component_44309';
export function Component44309({ value = 44309, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44309, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44309, 'data-value': derived.doubled }, children);
}
export default Component44309;
