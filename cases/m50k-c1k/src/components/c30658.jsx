import React from 'react';
const LABEL_30658 = 'component_30658';
export function Component30658({ value = 30658, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30658, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30658, 'data-value': derived.doubled }, children);
}
export default Component30658;
