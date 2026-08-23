import React from 'react';
const LABEL_38655 = 'component_38655';
export function Component38655({ value = 38655, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38655, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38655, 'data-value': derived.doubled }, children);
}
export default Component38655;
