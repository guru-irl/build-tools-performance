import React from 'react';
const LABEL_18217 = 'component_18217';
export function Component18217({ value = 18217, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18217, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18217, 'data-value': derived.doubled }, children);
}
export default Component18217;
