import React from 'react';
const LABEL_29013 = 'component_29013';
export function Component29013({ value = 29013, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29013, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29013, 'data-value': derived.doubled }, children);
}
export default Component29013;
