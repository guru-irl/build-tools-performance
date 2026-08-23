import React from 'react';
const LABEL_4744 = 'component_4744';
export function Component4744({ value = 4744, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4744, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4744, 'data-value': derived.doubled }, children);
}
export default Component4744;
