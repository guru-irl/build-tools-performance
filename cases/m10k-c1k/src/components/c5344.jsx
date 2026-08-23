import React from 'react';
const LABEL_5344 = 'component_5344';
export function Component5344({ value = 5344, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5344, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5344, 'data-value': derived.doubled }, children);
}
export default Component5344;
