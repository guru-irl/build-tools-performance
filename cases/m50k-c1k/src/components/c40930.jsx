import React from 'react';
const LABEL_40930 = 'component_40930';
export function Component40930({ value = 40930, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40930, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40930, 'data-value': derived.doubled }, children);
}
export default Component40930;
