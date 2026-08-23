import React from 'react';
const LABEL_43659 = 'component_43659';
export function Component43659({ value = 43659, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43659, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43659, 'data-value': derived.doubled }, children);
}
export default Component43659;
