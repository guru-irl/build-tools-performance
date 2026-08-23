import React from 'react';
const LABEL_34451 = 'component_34451';
export function Component34451({ value = 34451, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34451, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34451, 'data-value': derived.doubled }, children);
}
export default Component34451;
