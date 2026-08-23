import React from 'react';
const LABEL_19693 = 'component_19693';
export function Component19693({ value = 19693, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19693, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19693, 'data-value': derived.doubled }, children);
}
export default Component19693;
