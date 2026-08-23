import React from 'react';
const LABEL_40295 = 'component_40295';
export function Component40295({ value = 40295, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40295, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40295, 'data-value': derived.doubled }, children);
}
export default Component40295;
