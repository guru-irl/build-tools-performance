import React from 'react';
const LABEL_43297 = 'component_43297';
export function Component43297({ value = 43297, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43297, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43297, 'data-value': derived.doubled }, children);
}
export default Component43297;
