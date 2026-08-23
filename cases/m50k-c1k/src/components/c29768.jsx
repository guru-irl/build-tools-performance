import React from 'react';
const LABEL_29768 = 'component_29768';
export function Component29768({ value = 29768, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29768, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29768, 'data-value': derived.doubled }, children);
}
export default Component29768;
