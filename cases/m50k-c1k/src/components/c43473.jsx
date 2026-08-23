import React from 'react';
const LABEL_43473 = 'component_43473';
export function Component43473({ value = 43473, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43473, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43473, 'data-value': derived.doubled }, children);
}
export default Component43473;
