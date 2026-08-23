import React from 'react';
const LABEL_43693 = 'component_43693';
export function Component43693({ value = 43693, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43693, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43693, 'data-value': derived.doubled }, children);
}
export default Component43693;
