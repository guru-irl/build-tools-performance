import React from 'react';
const LABEL_7107 = 'component_7107';
export function Component7107({ value = 7107, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7107, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7107, 'data-value': derived.doubled }, children);
}
export default Component7107;
