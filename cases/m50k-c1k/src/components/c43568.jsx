import React from 'react';
const LABEL_43568 = 'component_43568';
export function Component43568({ value = 43568, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43568, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43568, 'data-value': derived.doubled }, children);
}
export default Component43568;
