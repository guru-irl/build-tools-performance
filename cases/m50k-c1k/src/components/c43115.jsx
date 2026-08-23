import React from 'react';
const LABEL_43115 = 'component_43115';
export function Component43115({ value = 43115, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43115, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43115, 'data-value': derived.doubled }, children);
}
export default Component43115;
