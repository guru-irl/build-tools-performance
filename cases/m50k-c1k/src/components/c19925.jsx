import React from 'react';
const LABEL_19925 = 'component_19925';
export function Component19925({ value = 19925, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19925, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19925, 'data-value': derived.doubled }, children);
}
export default Component19925;
