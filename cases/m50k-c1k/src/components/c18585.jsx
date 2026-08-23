import React from 'react';
const LABEL_18585 = 'component_18585';
export function Component18585({ value = 18585, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18585, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18585, 'data-value': derived.doubled }, children);
}
export default Component18585;
