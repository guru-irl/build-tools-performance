import React from 'react';
const LABEL_44129 = 'component_44129';
export function Component44129({ value = 44129, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44129, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44129, 'data-value': derived.doubled }, children);
}
export default Component44129;
