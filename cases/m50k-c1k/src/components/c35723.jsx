import React from 'react';
const LABEL_35723 = 'component_35723';
export function Component35723({ value = 35723, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35723, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35723, 'data-value': derived.doubled }, children);
}
export default Component35723;
