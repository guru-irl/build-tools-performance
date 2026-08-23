import React from 'react';
const LABEL_29723 = 'component_29723';
export function Component29723({ value = 29723, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29723, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29723, 'data-value': derived.doubled }, children);
}
export default Component29723;
