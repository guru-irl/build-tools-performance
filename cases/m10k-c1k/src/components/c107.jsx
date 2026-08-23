import React from 'react';
const LABEL_107 = 'component_107';
export function Component107({ value = 107, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_107, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_107, 'data-value': derived.doubled }, children);
}
export default Component107;
