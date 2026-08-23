import React from 'react';
const LABEL_27716 = 'component_27716';
export function Component27716({ value = 27716, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27716, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27716, 'data-value': derived.doubled }, children);
}
export default Component27716;
