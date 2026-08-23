import React from 'react';
const LABEL_45130 = 'component_45130';
export function Component45130({ value = 45130, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45130, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45130, 'data-value': derived.doubled }, children);
}
export default Component45130;
