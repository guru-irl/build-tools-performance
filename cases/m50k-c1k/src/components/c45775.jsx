import React from 'react';
const LABEL_45775 = 'component_45775';
export function Component45775({ value = 45775, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45775, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45775, 'data-value': derived.doubled }, children);
}
export default Component45775;
