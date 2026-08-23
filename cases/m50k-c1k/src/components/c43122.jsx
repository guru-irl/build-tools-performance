import React from 'react';
const LABEL_43122 = 'component_43122';
export function Component43122({ value = 43122, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43122, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43122, 'data-value': derived.doubled }, children);
}
export default Component43122;
