import React from 'react';
const LABEL_29655 = 'component_29655';
export function Component29655({ value = 29655, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29655, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29655, 'data-value': derived.doubled }, children);
}
export default Component29655;
