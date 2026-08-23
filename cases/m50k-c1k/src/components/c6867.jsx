import React from 'react';
const LABEL_6867 = 'component_6867';
export function Component6867({ value = 6867, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6867, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6867, 'data-value': derived.doubled }, children);
}
export default Component6867;
