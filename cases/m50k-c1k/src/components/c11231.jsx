import React from 'react';
const LABEL_11231 = 'component_11231';
export function Component11231({ value = 11231, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11231, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11231, 'data-value': derived.doubled }, children);
}
export default Component11231;
