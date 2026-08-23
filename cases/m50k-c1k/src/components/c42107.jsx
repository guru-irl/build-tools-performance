import React from 'react';
const LABEL_42107 = 'component_42107';
export function Component42107({ value = 42107, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42107, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42107, 'data-value': derived.doubled }, children);
}
export default Component42107;
