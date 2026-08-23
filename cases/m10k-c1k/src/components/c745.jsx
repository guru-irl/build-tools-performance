import React from 'react';
const LABEL_745 = 'component_745';
export function Component745({ value = 745, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_745, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_745, 'data-value': derived.doubled }, children);
}
export default Component745;
