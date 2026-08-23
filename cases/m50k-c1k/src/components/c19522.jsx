import React from 'react';
const LABEL_19522 = 'component_19522';
export function Component19522({ value = 19522, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19522, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19522, 'data-value': derived.doubled }, children);
}
export default Component19522;
