import React from 'react';
const LABEL_42940 = 'component_42940';
export function Component42940({ value = 42940, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42940, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42940, 'data-value': derived.doubled }, children);
}
export default Component42940;
