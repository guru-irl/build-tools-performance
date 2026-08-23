import React from 'react';
const LABEL_38867 = 'component_38867';
export function Component38867({ value = 38867, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38867, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38867, 'data-value': derived.doubled }, children);
}
export default Component38867;
