import React from 'react';
const LABEL_30121 = 'component_30121';
export function Component30121({ value = 30121, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30121, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30121, 'data-value': derived.doubled }, children);
}
export default Component30121;
