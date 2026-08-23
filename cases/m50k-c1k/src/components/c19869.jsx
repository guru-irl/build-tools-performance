import React from 'react';
const LABEL_19869 = 'component_19869';
export function Component19869({ value = 19869, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19869, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19869, 'data-value': derived.doubled }, children);
}
export default Component19869;
