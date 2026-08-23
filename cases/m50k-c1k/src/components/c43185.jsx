import React from 'react';
const LABEL_43185 = 'component_43185';
export function Component43185({ value = 43185, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43185, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43185, 'data-value': derived.doubled }, children);
}
export default Component43185;
