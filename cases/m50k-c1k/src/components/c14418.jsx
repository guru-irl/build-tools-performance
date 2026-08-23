import React from 'react';
const LABEL_14418 = 'component_14418';
export function Component14418({ value = 14418, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14418, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14418, 'data-value': derived.doubled }, children);
}
export default Component14418;
