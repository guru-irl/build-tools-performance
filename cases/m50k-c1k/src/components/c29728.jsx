import React from 'react';
const LABEL_29728 = 'component_29728';
export function Component29728({ value = 29728, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29728, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29728, 'data-value': derived.doubled }, children);
}
export default Component29728;
