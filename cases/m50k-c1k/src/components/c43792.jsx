import React from 'react';
const LABEL_43792 = 'component_43792';
export function Component43792({ value = 43792, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43792, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43792, 'data-value': derived.doubled }, children);
}
export default Component43792;
