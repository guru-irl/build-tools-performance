import React from 'react';
const LABEL_43013 = 'component_43013';
export function Component43013({ value = 43013, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43013, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43013, 'data-value': derived.doubled }, children);
}
export default Component43013;
