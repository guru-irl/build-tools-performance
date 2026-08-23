import React from 'react';
const LABEL_43838 = 'component_43838';
export function Component43838({ value = 43838, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43838, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43838, 'data-value': derived.doubled }, children);
}
export default Component43838;
