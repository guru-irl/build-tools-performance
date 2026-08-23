import React from 'react';
const LABEL_28107 = 'component_28107';
export function Component28107({ value = 28107, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28107, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28107, 'data-value': derived.doubled }, children);
}
export default Component28107;
