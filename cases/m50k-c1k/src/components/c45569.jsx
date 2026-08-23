import React from 'react';
const LABEL_45569 = 'component_45569';
export function Component45569({ value = 45569, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45569, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45569, 'data-value': derived.doubled }, children);
}
export default Component45569;
