import React from 'react';
const LABEL_9543 = 'component_9543';
export function Component9543({ value = 9543, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9543, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9543, 'data-value': derived.doubled }, children);
}
export default Component9543;
