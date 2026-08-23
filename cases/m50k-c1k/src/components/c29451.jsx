import React from 'react';
const LABEL_29451 = 'component_29451';
export function Component29451({ value = 29451, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29451, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29451, 'data-value': derived.doubled }, children);
}
export default Component29451;
