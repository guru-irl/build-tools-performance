import React from 'react';
const LABEL_13320 = 'component_13320';
export function Component13320({ value = 13320, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13320, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13320, 'data-value': derived.doubled }, children);
}
export default Component13320;
