import React from 'react';
const LABEL_36693 = 'component_36693';
export function Component36693({ value = 36693, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36693, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36693, 'data-value': derived.doubled }, children);
}
export default Component36693;
