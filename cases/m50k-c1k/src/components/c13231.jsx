import React from 'react';
const LABEL_13231 = 'component_13231';
export function Component13231({ value = 13231, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13231, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13231, 'data-value': derived.doubled }, children);
}
export default Component13231;
