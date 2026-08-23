import React from 'react';
const LABEL_10580 = 'component_10580';
export function Component10580({ value = 10580, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10580, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10580, 'data-value': derived.doubled }, children);
}
export default Component10580;
