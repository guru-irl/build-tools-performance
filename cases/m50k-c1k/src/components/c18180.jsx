import React from 'react';
const LABEL_18180 = 'component_18180';
export function Component18180({ value = 18180, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18180, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18180, 'data-value': derived.doubled }, children);
}
export default Component18180;
