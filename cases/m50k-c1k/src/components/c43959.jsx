import React from 'react';
const LABEL_43959 = 'component_43959';
export function Component43959({ value = 43959, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43959, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43959, 'data-value': derived.doubled }, children);
}
export default Component43959;
