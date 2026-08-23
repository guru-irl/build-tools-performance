import React from 'react';
const LABEL_18054 = 'component_18054';
export function Component18054({ value = 18054, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18054, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18054, 'data-value': derived.doubled }, children);
}
export default Component18054;
