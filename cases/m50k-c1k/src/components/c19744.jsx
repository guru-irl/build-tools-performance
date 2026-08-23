import React from 'react';
const LABEL_19744 = 'component_19744';
export function Component19744({ value = 19744, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19744, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19744, 'data-value': derived.doubled }, children);
}
export default Component19744;
