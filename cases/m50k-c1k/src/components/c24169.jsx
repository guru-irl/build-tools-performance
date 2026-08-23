import React from 'react';
const LABEL_24169 = 'component_24169';
export function Component24169({ value = 24169, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24169, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24169, 'data-value': derived.doubled }, children);
}
export default Component24169;
