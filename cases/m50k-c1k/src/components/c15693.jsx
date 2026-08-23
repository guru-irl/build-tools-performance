import React from 'react';
const LABEL_15693 = 'component_15693';
export function Component15693({ value = 15693, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15693, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15693, 'data-value': derived.doubled }, children);
}
export default Component15693;
