import React from 'react';
const LABEL_11723 = 'component_11723';
export function Component11723({ value = 11723, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11723, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11723, 'data-value': derived.doubled }, children);
}
export default Component11723;
