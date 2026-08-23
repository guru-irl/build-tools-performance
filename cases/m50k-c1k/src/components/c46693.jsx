import React from 'react';
const LABEL_46693 = 'component_46693';
export function Component46693({ value = 46693, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46693, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46693, 'data-value': derived.doubled }, children);
}
export default Component46693;
