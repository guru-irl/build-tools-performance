import React from 'react';
const LABEL_42980 = 'component_42980';
export function Component42980({ value = 42980, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42980, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42980, 'data-value': derived.doubled }, children);
}
export default Component42980;
