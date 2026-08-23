import React from 'react';
const LABEL_30460 = 'component_30460';
export function Component30460({ value = 30460, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30460, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30460, 'data-value': derived.doubled }, children);
}
export default Component30460;
