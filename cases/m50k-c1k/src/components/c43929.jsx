import React from 'react';
const LABEL_43929 = 'component_43929';
export function Component43929({ value = 43929, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43929, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43929, 'data-value': derived.doubled }, children);
}
export default Component43929;
