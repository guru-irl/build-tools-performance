import React from 'react';
const LABEL_29794 = 'component_29794';
export function Component29794({ value = 29794, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29794, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29794, 'data-value': derived.doubled }, children);
}
export default Component29794;
