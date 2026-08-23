import React from 'react';
const LABEL_4837 = 'component_4837';
export function Component4837({ value = 4837, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4837, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4837, 'data-value': derived.doubled }, children);
}
export default Component4837;
