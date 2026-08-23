import React from 'react';
const LABEL_46866 = 'component_46866';
export function Component46866({ value = 46866, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46866, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46866, 'data-value': derived.doubled }, children);
}
export default Component46866;
