import React from 'react';
const LABEL_43700 = 'component_43700';
export function Component43700({ value = 43700, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43700, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43700, 'data-value': derived.doubled }, children);
}
export default Component43700;
