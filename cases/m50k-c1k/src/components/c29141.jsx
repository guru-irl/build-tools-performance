import React from 'react';
const LABEL_29141 = 'component_29141';
export function Component29141({ value = 29141, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29141, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29141, 'data-value': derived.doubled }, children);
}
export default Component29141;
