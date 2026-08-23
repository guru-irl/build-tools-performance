import React from 'react';
const LABEL_10982 = 'component_10982';
export function Component10982({ value = 10982, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10982, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10982, 'data-value': derived.doubled }, children);
}
export default Component10982;
