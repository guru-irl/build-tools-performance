import React from 'react';
const LABEL_871 = 'component_871';
export function Component871({ value = 871, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_871, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_871, 'data-value': derived.doubled }, children);
}
export default Component871;
