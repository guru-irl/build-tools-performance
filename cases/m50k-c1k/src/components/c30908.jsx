import React from 'react';
const LABEL_30908 = 'component_30908';
export function Component30908({ value = 30908, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30908, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30908, 'data-value': derived.doubled }, children);
}
export default Component30908;
