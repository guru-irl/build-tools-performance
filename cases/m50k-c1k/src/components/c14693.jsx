import React from 'react';
const LABEL_14693 = 'component_14693';
export function Component14693({ value = 14693, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14693, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14693, 'data-value': derived.doubled }, children);
}
export default Component14693;
