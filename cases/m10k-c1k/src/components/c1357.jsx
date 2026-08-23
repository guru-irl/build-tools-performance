import React from 'react';
const LABEL_1357 = 'component_1357';
export function Component1357({ value = 1357, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1357, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1357, 'data-value': derived.doubled }, children);
}
export default Component1357;
