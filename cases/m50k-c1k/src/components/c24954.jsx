import React from 'react';
const LABEL_24954 = 'component_24954';
export function Component24954({ value = 24954, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24954, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24954, 'data-value': derived.doubled }, children);
}
export default Component24954;
