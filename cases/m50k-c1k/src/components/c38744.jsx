import React from 'react';
const LABEL_38744 = 'component_38744';
export function Component38744({ value = 38744, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38744, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38744, 'data-value': derived.doubled }, children);
}
export default Component38744;
