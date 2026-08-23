import React from 'react';
const LABEL_41877 = 'component_41877';
export function Component41877({ value = 41877, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41877, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41877, 'data-value': derived.doubled }, children);
}
export default Component41877;
