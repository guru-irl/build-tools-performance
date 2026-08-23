import React from 'react';
const LABEL_41371 = 'component_41371';
export function Component41371({ value = 41371, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41371, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41371, 'data-value': derived.doubled }, children);
}
export default Component41371;
