import React from 'react';
const LABEL_43783 = 'component_43783';
export function Component43783({ value = 43783, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43783, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43783, 'data-value': derived.doubled }, children);
}
export default Component43783;
