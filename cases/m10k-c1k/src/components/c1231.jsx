import React from 'react';
const LABEL_1231 = 'component_1231';
export function Component1231({ value = 1231, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1231, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1231, 'data-value': derived.doubled }, children);
}
export default Component1231;
