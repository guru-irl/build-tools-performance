import React from 'react';
const LABEL_18020 = 'component_18020';
export function Component18020({ value = 18020, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18020, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18020, 'data-value': derived.doubled }, children);
}
export default Component18020;
