import React from 'react';
const LABEL_43415 = 'component_43415';
export function Component43415({ value = 43415, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43415, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43415, 'data-value': derived.doubled }, children);
}
export default Component43415;
