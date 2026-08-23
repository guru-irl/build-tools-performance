import React from 'react';
const LABEL_43459 = 'component_43459';
export function Component43459({ value = 43459, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43459, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43459, 'data-value': derived.doubled }, children);
}
export default Component43459;
