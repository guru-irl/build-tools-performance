import React from 'react';
const LABEL_19043 = 'component_19043';
export function Component19043({ value = 19043, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19043, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19043, 'data-value': derived.doubled }, children);
}
export default Component19043;
