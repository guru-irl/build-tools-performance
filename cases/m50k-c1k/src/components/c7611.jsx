import React from 'react';
const LABEL_7611 = 'component_7611';
export function Component7611({ value = 7611, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7611, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7611, 'data-value': derived.doubled }, children);
}
export default Component7611;
