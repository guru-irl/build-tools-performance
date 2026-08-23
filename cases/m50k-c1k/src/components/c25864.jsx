import React from 'react';
const LABEL_25864 = 'component_25864';
export function Component25864({ value = 25864, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25864, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25864, 'data-value': derived.doubled }, children);
}
export default Component25864;
