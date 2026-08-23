import React from 'react';
const LABEL_43549 = 'component_43549';
export function Component43549({ value = 43549, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43549, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43549, 'data-value': derived.doubled }, children);
}
export default Component43549;
