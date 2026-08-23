import React from 'react';
const LABEL_27721 = 'component_27721';
export function Component27721({ value = 27721, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27721, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27721, 'data-value': derived.doubled }, children);
}
export default Component27721;
