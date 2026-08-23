import React from 'react';
const LABEL_16645 = 'component_16645';
export function Component16645({ value = 16645, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16645, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16645, 'data-value': derived.doubled }, children);
}
export default Component16645;
