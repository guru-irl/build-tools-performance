import React from 'react';
const LABEL_25713 = 'component_25713';
export function Component25713({ value = 25713, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25713, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25713, 'data-value': derived.doubled }, children);
}
export default Component25713;
