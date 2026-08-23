import React from 'react';
const LABEL_44221 = 'component_44221';
export function Component44221({ value = 44221, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44221, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44221, 'data-value': derived.doubled }, children);
}
export default Component44221;
