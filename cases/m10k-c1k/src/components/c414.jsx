import React from 'react';
const LABEL_414 = 'component_414';
export function Component414({ value = 414, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_414, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_414, 'data-value': derived.doubled }, children);
}
export default Component414;
