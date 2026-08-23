import React from 'react';
const LABEL_16344 = 'component_16344';
export function Component16344({ value = 16344, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16344, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16344, 'data-value': derived.doubled }, children);
}
export default Component16344;
