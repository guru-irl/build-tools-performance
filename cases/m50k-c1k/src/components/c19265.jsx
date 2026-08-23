import React from 'react';
const LABEL_19265 = 'component_19265';
export function Component19265({ value = 19265, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19265, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19265, 'data-value': derived.doubled }, children);
}
export default Component19265;
