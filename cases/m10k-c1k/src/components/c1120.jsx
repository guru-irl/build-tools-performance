import React from 'react';
const LABEL_1120 = 'component_1120';
export function Component1120({ value = 1120, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1120, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1120, 'data-value': derived.doubled }, children);
}
export default Component1120;
