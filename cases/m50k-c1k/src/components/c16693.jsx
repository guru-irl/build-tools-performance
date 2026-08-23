import React from 'react';
const LABEL_16693 = 'component_16693';
export function Component16693({ value = 16693, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16693, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16693, 'data-value': derived.doubled }, children);
}
export default Component16693;
