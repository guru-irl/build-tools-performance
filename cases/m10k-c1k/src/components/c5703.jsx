import React from 'react';
const LABEL_5703 = 'component_5703';
export function Component5703({ value = 5703, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5703, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5703, 'data-value': derived.doubled }, children);
}
export default Component5703;
