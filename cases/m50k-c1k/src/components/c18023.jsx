import React from 'react';
const LABEL_18023 = 'component_18023';
export function Component18023({ value = 18023, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18023, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18023, 'data-value': derived.doubled }, children);
}
export default Component18023;
