import React from 'react';
const LABEL_31587 = 'component_31587';
export function Component31587({ value = 31587, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31587, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31587, 'data-value': derived.doubled }, children);
}
export default Component31587;
