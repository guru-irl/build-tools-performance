import React from 'react';
const LABEL_16723 = 'component_16723';
export function Component16723({ value = 16723, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16723, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16723, 'data-value': derived.doubled }, children);
}
export default Component16723;
