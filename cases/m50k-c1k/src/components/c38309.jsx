import React from 'react';
const LABEL_38309 = 'component_38309';
export function Component38309({ value = 38309, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38309, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38309, 'data-value': derived.doubled }, children);
}
export default Component38309;
