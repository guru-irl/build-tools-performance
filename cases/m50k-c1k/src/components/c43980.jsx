import React from 'react';
const LABEL_43980 = 'component_43980';
export function Component43980({ value = 43980, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43980, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43980, 'data-value': derived.doubled }, children);
}
export default Component43980;
