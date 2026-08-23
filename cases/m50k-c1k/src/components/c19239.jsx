import React from 'react';
const LABEL_19239 = 'component_19239';
export function Component19239({ value = 19239, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19239, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19239, 'data-value': derived.doubled }, children);
}
export default Component19239;
