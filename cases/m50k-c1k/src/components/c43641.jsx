import React from 'react';
const LABEL_43641 = 'component_43641';
export function Component43641({ value = 43641, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43641, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43641, 'data-value': derived.doubled }, children);
}
export default Component43641;
