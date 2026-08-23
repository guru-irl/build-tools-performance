import React from 'react';
const LABEL_29693 = 'component_29693';
export function Component29693({ value = 29693, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29693, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29693, 'data-value': derived.doubled }, children);
}
export default Component29693;
