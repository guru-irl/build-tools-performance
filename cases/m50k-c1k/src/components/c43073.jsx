import React from 'react';
const LABEL_43073 = 'component_43073';
export function Component43073({ value = 43073, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43073, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43073, 'data-value': derived.doubled }, children);
}
export default Component43073;
