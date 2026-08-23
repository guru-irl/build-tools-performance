import React from 'react';
const LABEL_43107 = 'component_43107';
export function Component43107({ value = 43107, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43107, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43107, 'data-value': derived.doubled }, children);
}
export default Component43107;
