import React from 'react';
const LABEL_45744 = 'component_45744';
export function Component45744({ value = 45744, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45744, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45744, 'data-value': derived.doubled }, children);
}
export default Component45744;
