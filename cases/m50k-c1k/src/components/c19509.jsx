import React from 'react';
const LABEL_19509 = 'component_19509';
export function Component19509({ value = 19509, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19509, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19509, 'data-value': derived.doubled }, children);
}
export default Component19509;
