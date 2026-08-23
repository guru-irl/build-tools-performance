import React from 'react';
const LABEL_43687 = 'component_43687';
export function Component43687({ value = 43687, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43687, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43687, 'data-value': derived.doubled }, children);
}
export default Component43687;
