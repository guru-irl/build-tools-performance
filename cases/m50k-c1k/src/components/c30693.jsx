import React from 'react';
const LABEL_30693 = 'component_30693';
export function Component30693({ value = 30693, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30693, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30693, 'data-value': derived.doubled }, children);
}
export default Component30693;
