import React from 'react';
const LABEL_5785 = 'component_5785';
export function Component5785({ value = 5785, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5785, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5785, 'data-value': derived.doubled }, children);
}
export default Component5785;
