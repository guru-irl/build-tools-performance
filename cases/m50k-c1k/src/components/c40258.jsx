import React from 'react';
const LABEL_40258 = 'component_40258';
export function Component40258({ value = 40258, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40258, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40258, 'data-value': derived.doubled }, children);
}
export default Component40258;
