import React from 'react';
const LABEL_44925 = 'component_44925';
export function Component44925({ value = 44925, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44925, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44925, 'data-value': derived.doubled }, children);
}
export default Component44925;
