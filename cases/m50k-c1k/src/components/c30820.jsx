import React from 'react';
const LABEL_30820 = 'component_30820';
export function Component30820({ value = 30820, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30820, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30820, 'data-value': derived.doubled }, children);
}
export default Component30820;
