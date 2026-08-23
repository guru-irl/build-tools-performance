import React from 'react';
const LABEL_20686 = 'component_20686';
export function Component20686({ value = 20686, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20686, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20686, 'data-value': derived.doubled }, children);
}
export default Component20686;
