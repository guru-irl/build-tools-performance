import React from 'react';
const LABEL_28693 = 'component_28693';
export function Component28693({ value = 28693, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28693, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28693, 'data-value': derived.doubled }, children);
}
export default Component28693;
