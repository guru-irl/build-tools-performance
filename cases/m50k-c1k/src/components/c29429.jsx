import React from 'react';
const LABEL_29429 = 'component_29429';
export function Component29429({ value = 29429, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29429, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29429, 'data-value': derived.doubled }, children);
}
export default Component29429;
