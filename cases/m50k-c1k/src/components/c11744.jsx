import React from 'react';
const LABEL_11744 = 'component_11744';
export function Component11744({ value = 11744, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11744, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11744, 'data-value': derived.doubled }, children);
}
export default Component11744;
