import React from 'react';
const LABEL_43781 = 'component_43781';
export function Component43781({ value = 43781, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43781, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43781, 'data-value': derived.doubled }, children);
}
export default Component43781;
