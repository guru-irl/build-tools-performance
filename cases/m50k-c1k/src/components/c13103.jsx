import React from 'react';
const LABEL_13103 = 'component_13103';
export function Component13103({ value = 13103, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13103, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13103, 'data-value': derived.doubled }, children);
}
export default Component13103;
