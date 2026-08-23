import React from 'react';
const LABEL_14414 = 'component_14414';
export function Component14414({ value = 14414, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14414, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14414, 'data-value': derived.doubled }, children);
}
export default Component14414;
