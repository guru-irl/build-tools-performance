import React from 'react';
const LABEL_43979 = 'component_43979';
export function Component43979({ value = 43979, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43979, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43979, 'data-value': derived.doubled }, children);
}
export default Component43979;
