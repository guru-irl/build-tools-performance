import React from 'react';
const LABEL_25946 = 'component_25946';
export function Component25946({ value = 25946, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25946, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25946, 'data-value': derived.doubled }, children);
}
export default Component25946;
