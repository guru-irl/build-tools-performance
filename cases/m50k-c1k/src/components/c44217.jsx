import React from 'react';
const LABEL_44217 = 'component_44217';
export function Component44217({ value = 44217, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44217, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44217, 'data-value': derived.doubled }, children);
}
export default Component44217;
