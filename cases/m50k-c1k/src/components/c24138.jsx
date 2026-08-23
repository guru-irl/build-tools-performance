import React from 'react';
const LABEL_24138 = 'component_24138';
export function Component24138({ value = 24138, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24138, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24138, 'data-value': derived.doubled }, children);
}
export default Component24138;
