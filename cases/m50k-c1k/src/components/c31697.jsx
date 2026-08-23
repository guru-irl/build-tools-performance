import React from 'react';
const LABEL_31697 = 'component_31697';
export function Component31697({ value = 31697, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31697, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31697, 'data-value': derived.doubled }, children);
}
export default Component31697;
