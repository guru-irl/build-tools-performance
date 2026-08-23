import React from 'react';
const LABEL_12155 = 'component_12155';
export function Component12155({ value = 12155, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12155, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12155, 'data-value': derived.doubled }, children);
}
export default Component12155;
