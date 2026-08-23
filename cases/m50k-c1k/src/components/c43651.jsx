import React from 'react';
const LABEL_43651 = 'component_43651';
export function Component43651({ value = 43651, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43651, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43651, 'data-value': derived.doubled }, children);
}
export default Component43651;
