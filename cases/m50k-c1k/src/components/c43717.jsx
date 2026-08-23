import React from 'react';
const LABEL_43717 = 'component_43717';
export function Component43717({ value = 43717, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43717, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43717, 'data-value': derived.doubled }, children);
}
export default Component43717;
