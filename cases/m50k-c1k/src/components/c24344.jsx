import React from 'react';
const LABEL_24344 = 'component_24344';
export function Component24344({ value = 24344, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24344, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24344, 'data-value': derived.doubled }, children);
}
export default Component24344;
