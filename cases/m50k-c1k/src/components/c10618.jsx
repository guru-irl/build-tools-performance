import React from 'react';
const LABEL_10618 = 'component_10618';
export function Component10618({ value = 10618, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10618, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10618, 'data-value': derived.doubled }, children);
}
export default Component10618;
