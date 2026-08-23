import React from 'react';
const LABEL_34309 = 'component_34309';
export function Component34309({ value = 34309, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34309, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34309, 'data-value': derived.doubled }, children);
}
export default Component34309;
