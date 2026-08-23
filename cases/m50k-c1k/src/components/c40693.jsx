import React from 'react';
const LABEL_40693 = 'component_40693';
export function Component40693({ value = 40693, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40693, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40693, 'data-value': derived.doubled }, children);
}
export default Component40693;
