import React from 'react';
const LABEL_7693 = 'component_7693';
export function Component7693({ value = 7693, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7693, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7693, 'data-value': derived.doubled }, children);
}
export default Component7693;
