import React from 'react';
const LABEL_27944 = 'component_27944';
export function Component27944({ value = 27944, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27944, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27944, 'data-value': derived.doubled }, children);
}
export default Component27944;
