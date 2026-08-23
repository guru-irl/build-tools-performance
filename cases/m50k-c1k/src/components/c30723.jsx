import React from 'react';
const LABEL_30723 = 'component_30723';
export function Component30723({ value = 30723, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30723, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30723, 'data-value': derived.doubled }, children);
}
export default Component30723;
