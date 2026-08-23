import React from 'react';
const LABEL_30357 = 'component_30357';
export function Component30357({ value = 30357, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30357, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30357, 'data-value': derived.doubled }, children);
}
export default Component30357;
