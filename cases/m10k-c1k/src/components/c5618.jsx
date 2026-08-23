import React from 'react';
const LABEL_5618 = 'component_5618';
export function Component5618({ value = 5618, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5618, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5618, 'data-value': derived.doubled }, children);
}
export default Component5618;
