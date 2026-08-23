import React from 'react';
const LABEL_25006 = 'component_25006';
export function Component25006({ value = 25006, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25006, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25006, 'data-value': derived.doubled }, children);
}
export default Component25006;
