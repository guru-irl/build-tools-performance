import React from 'react';
const LABEL_33639 = 'component_33639';
export function Component33639({ value = 33639, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33639, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33639, 'data-value': derived.doubled }, children);
}
export default Component33639;
