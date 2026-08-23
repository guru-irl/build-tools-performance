import React from 'react';
const LABEL_32394 = 'component_32394';
export function Component32394({ value = 32394, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32394, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32394, 'data-value': derived.doubled }, children);
}
export default Component32394;
