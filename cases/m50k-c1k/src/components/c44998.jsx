import React from 'react';
const LABEL_44998 = 'component_44998';
export function Component44998({ value = 44998, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44998, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44998, 'data-value': derived.doubled }, children);
}
export default Component44998;
