import React from 'react';
const LABEL_4451 = 'component_4451';
export function Component4451({ value = 4451, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4451, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4451, 'data-value': derived.doubled }, children);
}
export default Component4451;
