import React from 'react';
const LABEL_36775 = 'component_36775';
export function Component36775({ value = 36775, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36775, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36775, 'data-value': derived.doubled }, children);
}
export default Component36775;
