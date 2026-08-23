import React from 'react';
const LABEL_25575 = 'component_25575';
export function Component25575({ value = 25575, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25575, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25575, 'data-value': derived.doubled }, children);
}
export default Component25575;
