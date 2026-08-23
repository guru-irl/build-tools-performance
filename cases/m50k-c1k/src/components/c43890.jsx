import React from 'react';
const LABEL_43890 = 'component_43890';
export function Component43890({ value = 43890, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43890, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43890, 'data-value': derived.doubled }, children);
}
export default Component43890;
