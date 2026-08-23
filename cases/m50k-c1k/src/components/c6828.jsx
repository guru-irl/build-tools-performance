import React from 'react';
const LABEL_6828 = 'component_6828';
export function Component6828({ value = 6828, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6828, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6828, 'data-value': derived.doubled }, children);
}
export default Component6828;
