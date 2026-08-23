import React from 'react';
const LABEL_1872 = 'component_1872';
export function Component1872({ value = 1872, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1872, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1872, 'data-value': derived.doubled }, children);
}
export default Component1872;
