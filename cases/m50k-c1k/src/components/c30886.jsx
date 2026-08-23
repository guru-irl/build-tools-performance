import React from 'react';
const LABEL_30886 = 'component_30886';
export function Component30886({ value = 30886, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30886, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30886, 'data-value': derived.doubled }, children);
}
export default Component30886;
