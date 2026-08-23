import React from 'react';
const LABEL_20693 = 'component_20693';
export function Component20693({ value = 20693, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20693, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20693, 'data-value': derived.doubled }, children);
}
export default Component20693;
