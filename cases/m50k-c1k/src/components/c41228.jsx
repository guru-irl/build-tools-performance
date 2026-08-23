import React from 'react';
const LABEL_41228 = 'component_41228';
export function Component41228({ value = 41228, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41228, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41228, 'data-value': derived.doubled }, children);
}
export default Component41228;
