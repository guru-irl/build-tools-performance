import React from 'react';
const LABEL_24734 = 'component_24734';
export function Component24734({ value = 24734, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24734, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24734, 'data-value': derived.doubled }, children);
}
export default Component24734;
