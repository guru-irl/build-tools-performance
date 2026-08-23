import React from 'react';
const LABEL_46775 = 'component_46775';
export function Component46775({ value = 46775, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46775, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46775, 'data-value': derived.doubled }, children);
}
export default Component46775;
