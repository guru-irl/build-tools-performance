import React from 'react';
const LABEL_43850 = 'component_43850';
export function Component43850({ value = 43850, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43850, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43850, 'data-value': derived.doubled }, children);
}
export default Component43850;
