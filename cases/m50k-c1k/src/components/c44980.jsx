import React from 'react';
const LABEL_44980 = 'component_44980';
export function Component44980({ value = 44980, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44980, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44980, 'data-value': derived.doubled }, children);
}
export default Component44980;
