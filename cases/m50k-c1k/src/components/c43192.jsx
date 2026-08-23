import React from 'react';
const LABEL_43192 = 'component_43192';
export function Component43192({ value = 43192, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43192, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43192, 'data-value': derived.doubled }, children);
}
export default Component43192;
