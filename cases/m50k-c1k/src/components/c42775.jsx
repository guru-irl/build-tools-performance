import React from 'react';
const LABEL_42775 = 'component_42775';
export function Component42775({ value = 42775, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42775, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42775, 'data-value': derived.doubled }, children);
}
export default Component42775;
