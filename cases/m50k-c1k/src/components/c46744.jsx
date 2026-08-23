import React from 'react';
const LABEL_46744 = 'component_46744';
export function Component46744({ value = 46744, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46744, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46744, 'data-value': derived.doubled }, children);
}
export default Component46744;
