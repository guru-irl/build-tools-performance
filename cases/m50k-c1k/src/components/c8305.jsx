import React from 'react';
const LABEL_8305 = 'component_8305';
export function Component8305({ value = 8305, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8305, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8305, 'data-value': derived.doubled }, children);
}
export default Component8305;
