import React from 'react';
const LABEL_43730 = 'component_43730';
export function Component43730({ value = 43730, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43730, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43730, 'data-value': derived.doubled }, children);
}
export default Component43730;
