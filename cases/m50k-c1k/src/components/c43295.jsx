import React from 'react';
const LABEL_43295 = 'component_43295';
export function Component43295({ value = 43295, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43295, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43295, 'data-value': derived.doubled }, children);
}
export default Component43295;
