import React from 'react';
const LABEL_18998 = 'component_18998';
export function Component18998({ value = 18998, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18998, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18998, 'data-value': derived.doubled }, children);
}
export default Component18998;
