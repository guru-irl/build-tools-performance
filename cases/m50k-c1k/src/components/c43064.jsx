import React from 'react';
const LABEL_43064 = 'component_43064';
export function Component43064({ value = 43064, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43064, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43064, 'data-value': derived.doubled }, children);
}
export default Component43064;
