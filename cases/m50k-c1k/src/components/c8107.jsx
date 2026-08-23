import React from 'react';
const LABEL_8107 = 'component_8107';
export function Component8107({ value = 8107, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8107, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8107, 'data-value': derived.doubled }, children);
}
export default Component8107;
