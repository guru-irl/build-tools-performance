import React from 'react';
const LABEL_41693 = 'component_41693';
export function Component41693({ value = 41693, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41693, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41693, 'data-value': derived.doubled }, children);
}
export default Component41693;
