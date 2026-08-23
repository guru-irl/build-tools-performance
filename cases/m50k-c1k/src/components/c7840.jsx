import React from 'react';
const LABEL_7840 = 'component_7840';
export function Component7840({ value = 7840, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7840, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7840, 'data-value': derived.doubled }, children);
}
export default Component7840;
