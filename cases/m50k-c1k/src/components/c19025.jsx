import React from 'react';
const LABEL_19025 = 'component_19025';
export function Component19025({ value = 19025, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19025, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19025, 'data-value': derived.doubled }, children);
}
export default Component19025;
