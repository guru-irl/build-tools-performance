import React from 'react';
const LABEL_5020 = 'component_5020';
export function Component5020({ value = 5020, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5020, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5020, 'data-value': derived.doubled }, children);
}
export default Component5020;
