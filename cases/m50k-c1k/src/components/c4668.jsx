import React from 'react';
const LABEL_4668 = 'component_4668';
export function Component4668({ value = 4668, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4668, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4668, 'data-value': derived.doubled }, children);
}
export default Component4668;
