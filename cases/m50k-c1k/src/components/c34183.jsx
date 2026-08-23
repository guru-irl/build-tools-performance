import React from 'react';
const LABEL_34183 = 'component_34183';
export function Component34183({ value = 34183, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34183, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34183, 'data-value': derived.doubled }, children);
}
export default Component34183;
