import React from 'react';
const LABEL_41997 = 'component_41997';
export function Component41997({ value = 41997, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41997, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41997, 'data-value': derived.doubled }, children);
}
export default Component41997;
