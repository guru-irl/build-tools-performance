import React from 'react';
const LABEL_24740 = 'component_24740';
export function Component24740({ value = 24740, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24740, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24740, 'data-value': derived.doubled }, children);
}
export default Component24740;
