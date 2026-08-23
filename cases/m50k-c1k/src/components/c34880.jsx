import React from 'react';
const LABEL_34880 = 'component_34880';
export function Component34880({ value = 34880, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34880, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34880, 'data-value': derived.doubled }, children);
}
export default Component34880;
