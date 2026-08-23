import React from 'react';
const LABEL_40177 = 'component_40177';
export function Component40177({ value = 40177, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40177, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40177, 'data-value': derived.doubled }, children);
}
export default Component40177;
