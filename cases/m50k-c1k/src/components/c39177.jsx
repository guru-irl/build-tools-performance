import React from 'react';
const LABEL_39177 = 'component_39177';
export function Component39177({ value = 39177, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39177, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39177, 'data-value': derived.doubled }, children);
}
export default Component39177;
