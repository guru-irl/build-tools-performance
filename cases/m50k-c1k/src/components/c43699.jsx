import React from 'react';
const LABEL_43699 = 'component_43699';
export function Component43699({ value = 43699, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43699, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43699, 'data-value': derived.doubled }, children);
}
export default Component43699;
