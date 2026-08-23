import React from 'react';
const LABEL_43992 = 'component_43992';
export function Component43992({ value = 43992, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43992, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43992, 'data-value': derived.doubled }, children);
}
export default Component43992;
