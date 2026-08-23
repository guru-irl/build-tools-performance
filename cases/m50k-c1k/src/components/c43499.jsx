import React from 'react';
const LABEL_43499 = 'component_43499';
export function Component43499({ value = 43499, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43499, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43499, 'data-value': derived.doubled }, children);
}
export default Component43499;
