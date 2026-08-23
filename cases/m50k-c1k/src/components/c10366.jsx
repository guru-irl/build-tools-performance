import React from 'react';
const LABEL_10366 = 'component_10366';
export function Component10366({ value = 10366, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10366, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10366, 'data-value': derived.doubled }, children);
}
export default Component10366;
