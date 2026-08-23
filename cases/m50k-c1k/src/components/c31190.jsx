import React from 'react';
const LABEL_31190 = 'component_31190';
export function Component31190({ value = 31190, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31190, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31190, 'data-value': derived.doubled }, children);
}
export default Component31190;
