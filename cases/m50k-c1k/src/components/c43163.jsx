import React from 'react';
const LABEL_43163 = 'component_43163';
export function Component43163({ value = 43163, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43163, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43163, 'data-value': derived.doubled }, children);
}
export default Component43163;
