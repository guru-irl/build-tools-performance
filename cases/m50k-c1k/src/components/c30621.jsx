import React from 'react';
const LABEL_30621 = 'component_30621';
export function Component30621({ value = 30621, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30621, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30621, 'data-value': derived.doubled }, children);
}
export default Component30621;
