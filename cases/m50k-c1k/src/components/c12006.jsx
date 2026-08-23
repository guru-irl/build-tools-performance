import React from 'react';
const LABEL_12006 = 'component_12006';
export function Component12006({ value = 12006, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12006, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12006, 'data-value': derived.doubled }, children);
}
export default Component12006;
