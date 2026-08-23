import React from 'react';
const LABEL_43840 = 'component_43840';
export function Component43840({ value = 43840, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43840, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43840, 'data-value': derived.doubled }, children);
}
export default Component43840;
