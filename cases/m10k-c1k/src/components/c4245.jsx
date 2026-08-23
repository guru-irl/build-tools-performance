import React from 'react';
const LABEL_4245 = 'component_4245';
export function Component4245({ value = 4245, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4245, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4245, 'data-value': derived.doubled }, children);
}
export default Component4245;
