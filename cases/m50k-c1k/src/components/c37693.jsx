import React from 'react';
const LABEL_37693 = 'component_37693';
export function Component37693({ value = 37693, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37693, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37693, 'data-value': derived.doubled }, children);
}
export default Component37693;
