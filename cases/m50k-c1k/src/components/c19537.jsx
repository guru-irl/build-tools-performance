import React from 'react';
const LABEL_19537 = 'component_19537';
export function Component19537({ value = 19537, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19537, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19537, 'data-value': derived.doubled }, children);
}
export default Component19537;
