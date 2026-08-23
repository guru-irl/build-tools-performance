import React from 'react';
const LABEL_1716 = 'component_1716';
export function Component1716({ value = 1716, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1716, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1716, 'data-value': derived.doubled }, children);
}
export default Component1716;
