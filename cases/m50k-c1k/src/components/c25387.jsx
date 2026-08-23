import React from 'react';
const LABEL_25387 = 'component_25387';
export function Component25387({ value = 25387, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25387, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25387, 'data-value': derived.doubled }, children);
}
export default Component25387;
