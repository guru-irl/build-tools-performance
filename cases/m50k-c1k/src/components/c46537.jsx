import React from 'react';
const LABEL_46537 = 'component_46537';
export function Component46537({ value = 46537, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46537, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46537, 'data-value': derived.doubled }, children);
}
export default Component46537;
