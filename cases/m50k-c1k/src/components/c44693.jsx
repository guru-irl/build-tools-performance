import React from 'react';
const LABEL_44693 = 'component_44693';
export function Component44693({ value = 44693, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44693, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44693, 'data-value': derived.doubled }, children);
}
export default Component44693;
