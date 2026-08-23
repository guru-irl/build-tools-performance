import React from 'react';
const LABEL_41410 = 'component_41410';
export function Component41410({ value = 41410, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41410, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41410, 'data-value': derived.doubled }, children);
}
export default Component41410;
