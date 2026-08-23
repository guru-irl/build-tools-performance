import React from 'react';
const LABEL_6309 = 'component_6309';
export function Component6309({ value = 6309, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6309, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6309, 'data-value': derived.doubled }, children);
}
export default Component6309;
