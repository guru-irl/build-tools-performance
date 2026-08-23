import React from 'react';
const LABEL_16351 = 'component_16351';
export function Component16351({ value = 16351, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16351, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16351, 'data-value': derived.doubled }, children);
}
export default Component16351;
