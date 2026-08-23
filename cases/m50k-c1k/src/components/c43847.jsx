import React from 'react';
const LABEL_43847 = 'component_43847';
export function Component43847({ value = 43847, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43847, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43847, 'data-value': derived.doubled }, children);
}
export default Component43847;
