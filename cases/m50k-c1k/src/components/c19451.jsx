import React from 'react';
const LABEL_19451 = 'component_19451';
export function Component19451({ value = 19451, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19451, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19451, 'data-value': derived.doubled }, children);
}
export default Component19451;
