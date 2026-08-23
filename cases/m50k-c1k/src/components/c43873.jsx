import React from 'react';
const LABEL_43873 = 'component_43873';
export function Component43873({ value = 43873, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43873, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43873, 'data-value': derived.doubled }, children);
}
export default Component43873;
