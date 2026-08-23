import React from 'react';
const LABEL_43748 = 'component_43748';
export function Component43748({ value = 43748, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43748, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43748, 'data-value': derived.doubled }, children);
}
export default Component43748;
