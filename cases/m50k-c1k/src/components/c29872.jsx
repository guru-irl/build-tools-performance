import React from 'react';
const LABEL_29872 = 'component_29872';
export function Component29872({ value = 29872, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29872, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29872, 'data-value': derived.doubled }, children);
}
export default Component29872;
