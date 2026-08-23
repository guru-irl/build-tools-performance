import React from 'react';
const LABEL_16591 = 'component_16591';
export function Component16591({ value = 16591, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16591, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16591, 'data-value': derived.doubled }, children);
}
export default Component16591;
