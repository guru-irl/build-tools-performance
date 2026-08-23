import React from 'react';
const LABEL_43417 = 'component_43417';
export function Component43417({ value = 43417, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43417, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43417, 'data-value': derived.doubled }, children);
}
export default Component43417;
