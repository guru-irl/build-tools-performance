import React from 'react';
const LABEL_27739 = 'component_27739';
export function Component27739({ value = 27739, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27739, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27739, 'data-value': derived.doubled }, children);
}
export default Component27739;
