import React from 'react';
const LABEL_36054 = 'component_36054';
export function Component36054({ value = 36054, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36054, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36054, 'data-value': derived.doubled }, children);
}
export default Component36054;
