import React from 'react';
const LABEL_44780 = 'component_44780';
export function Component44780({ value = 44780, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44780, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44780, 'data-value': derived.doubled }, children);
}
export default Component44780;
