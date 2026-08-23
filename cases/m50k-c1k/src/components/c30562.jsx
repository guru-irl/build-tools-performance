import React from 'react';
const LABEL_30562 = 'component_30562';
export function Component30562({ value = 30562, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30562, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30562, 'data-value': derived.doubled }, children);
}
export default Component30562;
